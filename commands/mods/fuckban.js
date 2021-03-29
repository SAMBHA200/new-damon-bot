const { MessageEmbed } = require("discord.js");
//const { MessageEmbed } = require("discord.js");
const roasts = require("../../JSON/ban.json");
const db = require("quick.db");
const { bowner } = require("../../config.json");

module.exports = {
  name: "fuckban",
  aliases: [
    "fuckyou",
    "gandban",
    "lundban",
    "lawdaban",
    "muthban",
    "makichutban",
    "binban",
    "lavdaban",
    "lovedayban",
    "lavdeban",
    "randiban",
    "ghodiban",
    "hilaoban",
    "pussyban",
    "cockban",
    "jhaatban",
    "dickban",
    "chutban"
  ],
  category: "moderation",
  description: "Bans the user",
  usage: "[name | nickname | mention | ID] <reason> (optional)",

  accessableby: "Administrator",
  run: async (client, message, args) => {
    try {
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply(
          "**Chiley huye lawde aukaat mein reh permission nhi h tere pass**"
        );
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return message.reply(
          "**Jhaantu phle permissions toh dede mujje aur security se whitelist kr dio**"
        );

      if (!args[0])
        return message.reply("**bosdike ban kisko krna h vo toh bol**");

      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(
          r =>
            r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
        ) ||
        message.guild.members.cache.find(
          r =>
            r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
        );

      let roast = roasts.ban[Math.floor(Math.random() * roasts.ban.length)];

      let banMember =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(
          r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
        ) ||
        message.guild.members.cache.find(
          ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()
        );

      if (banMember.id === bowner)
        return message.reply(
          `Bsdk Owner Hai Vo Mera Gaand Maar Lunga Tere Behenchod`
        );
      if (!banMember)
        return message.reply("**ye chutiya iss server me nhi hai**");
      if (banMember === message.member)
        return message.reply(
          "**abe ohh saste nashe krke aaya h kya khud ki gaand maarne ka shauk h tujhe**"
        );
      var reason = args.slice(1).join(" ");
      if (
        message.member.roles.highest.position <=
        banMember.roles.highest.position
      )
        return message.reply(
          `Isko Ban Krna Tere Aukaat Ke Bahar Hai Baap Ko Bhej Bsdk`
        );

      if (
        message.guild.me.roles.highest.position <=
        banMember.roles.highest.position
      )
        return message.reply(
          `Bsdk Me Jisko Ban Nhi Kr Skta Usko Ban Kyu Krvaa Raha Hai`
        );
      try {
        banMember
          .send(
            `**Hello, You Have Been Banned From ${
              message.guild.name
            } for - ${reason || roast}**`
          )
          .then(() =>
            message.guild.members.ban(banMember, { days: 7, reason: reason })
          )
          .catch(() => null);
      } catch {
        message.guild.members.ban(banMember, { days: 7, reason: reason });
      }
      if (reason) {
        var sembed = new MessageEmbed()

          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setDescription(
            `**${banMember.user.username}** has been banned for ${roast}`
          );
        message.channel.send(sembed);
        banMember.ban(
          "[" + message.author.tag + "]" + " For No Reason Provided"
        );
      } else {
        var sembed2 = new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setDescription(
            `**${banMember.user.username}** has been banned ${roast}`
          );
        message.channel.send(sembed2);
        banMember.ban("[" + message.author.tag + "]" + " For " + reason);
      }

      let channel = db.fetch(`modlog_${message.guild.id}`);
      if (channel == null) return;
      if (!channel) return;
      const embed = new MessageEmbed()
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
        .setColor("RED")
        .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
        .setFooter(message.guild.name, message.guild.iconURL())
        .addField("**Moderation**", "ban")
        .addField("**Banned**", banMember.user.username)
        .addField("**ID**", `${banMember.id}`)
        .addField("**Banned By**", message.author.username)
        .addField("**Reason**", `${roast}, ${reason || "**No Reason**"}`)
        .addField("**Date**", message.createdAt.toLocaleString())
        .setTimestamp();
      var sChannel = message.guild.channels.cache.get(channel);
      if (!sChannel) return;
      sChannel.send(embed);
      banMember.ban(
        "[" + message.author.tag + "]" + ` ${reason || " No Reason Provided"}`
      );
    } catch (e) {
      return message.channel.send(`**error ${e.message}**`);
    }
  }
};

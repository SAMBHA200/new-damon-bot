const { MessageEmbed } = require("discord.js");
//const { MessageEmbed } = require("discord.js");
const roasts = require("../../JSON/ban.json");
const db = require("quick.db");

module.exports = {
  name: "fuckban",
  aliases: ["fuckyou","gandban","lundban","lawdaban","muthban","makichutban","dickban"],
  category: "moderation",
  description: "Bans the user",
  usage: "[name | nickname | mention | ID] <reason> (optional)",

  accessableby: "Administrator",
  run: async (client, message, args) => {
    try {
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply("**Chiley huye lawde aukaat mein reh permission nhi h tere pass**");

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
      if (!banMember)
        return message.reply("**ye chutiya iss server me nhi hai**");
      if (banMember === message.member)
        return message.reply("**abe ohh saste nashe krke aaya h kya khud ki gaand maarne ka shauk h tujhe**");
      var reason = args.slice(1).join(" ");
      if (!banMember.bannable)
        return message.reply("**me nhi kr skta isko ban jhaat phaad le**");
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
        banMember.ban();
      } else {
        var sembed2 = new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setDescription(
            `**${banMember.user.username}** has been banned ${roast}`
          );
        message.channel.send(sembed2);
        banMember.ban();
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
        .addField("**Reason**", `${reason || "**No Reason**"}`)
        .addField("**Date**", message.createdAt.toLocaleString())
        .setTimestamp();
      var sChannel = message.guild.channels.cache.get(channel);
      if (!sChannel) return;
      sChannel.send(embed);
      banMember.ban();
    } catch (e) {
      return message.channel.send(`**${e.message}**`);
    }
  }
};
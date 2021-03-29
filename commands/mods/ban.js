const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { bowner } = require("../../config.json");

module.exports = {
  name: "ban",
  aliases: ["b", "banish"],
  category: "moderation",
  description: "Bans the user",
  usage: "[name | nickname | mention | ID] <reason> (optional)",
  accessableby: "Administrator",

  run: async (client, message, args) => {
    try {
      if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(
          "**<:marvel_cross:814596854436069376> | You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**"
        );
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return message.channel.send(
          "**<:marvel_cross:814596854436069376> | I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**"
        );

      if (!args[0])
        return message.channel.send(
          "**<:marvel_cross:814596854436069376> | Please Provide A User To Ban!**"
        );
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
        return message.channel.send(
          "**<:marvel_cross:814596854436069376> | User Is Not In The Guild**"
        );
      if (banMember === message.member)
        return message.channel.send(
          "**<:marvel_cross:814596854436069376> | You Cannot Ban Yourself**"
        );
      if (banMember.id === bowner) return message.reply(`HE IS MY OWNER`);
      var reason = args.slice(1).join(" ");
      if (
        message.member.roles.highest.position <=
        banMember.roles.highest.position
      )
        return message.reply(
          "<:marvel_cross:814596854436069376> | Your Role isn't High Enough to Ban **``" +
            banMember.user.tag +
            "``**"
        );

      if (
        message.guild.me.roles.highest.position <=
        banMember.roles.highest.position
      )
        return message.reply(
          "<:marvel_cross:814596854436069376> | My Role Isn't High Enough to Ban **``" +
            banMember.user.tag +
            "``**"
        );
      try {
        banMember
          .send(
            `**Hello, You Have Been Banned From ${
              message.guild.name
            } for - ${reason || "No Reason"}**`
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
            `**<:marvel_tick:814596834814197781> | ${banMember.user.username}** has been banned for ${reason}`
          );
        message.channel.send(sembed);

        banMember.ban(
          "[" + message.author.tag + "]" + ` ${reason || " No Reason Provided"}`
        );
      } else {
        var sembed2 = new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setDescription(
            `**<:marvel_tick:814596834814197781> | ${banMember.user.username}** has been banned`
          );
        message.channel.send(sembed2);
        banMember.ban(
          "[" + message.author.tag + "]" + ` ${reason || " No Reason Provided"}`
        );
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
      banMember.ban(
        "[" + message.author.tag + "]" + ` ${reason || " No Reason Provided"}`
      );
    } catch (e) {
      return message.channel.send(`**${e.message}**`);
    }
  }
};

const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  // config: {
  name: "test",
  description: "Creating giveaway",
  accessableby: "Administrator",
  category: "giveaway",
  usage: "<channel> <duration> <winners> <prize>",
  //  },
  run: async (client, message, args) => {
    if (
      !message.member.hasPermission("MANAGE_MESSAGES") &&
      !message.member.roles.cache.some(r => r.name === "Giveaways")
    ) {
      return message.channel.send(
        ":x: You need to have the manage messages permissions to start giveaways."
      );
    }

    // Giveaway channel
    let Channel = message.mentions.channels.first();
    let giveawayChannel = message.guild.channels.cache.get(Channel.id);

    // If no channel is mentionned
    if (!giveawayChannel) {
      return message.channel.send(":x: You have to mention a valid channel!");
    } else {
      giveawayChannel.send("success");
    }
  }
};

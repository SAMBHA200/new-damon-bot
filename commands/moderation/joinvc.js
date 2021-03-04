const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { Client, Util } = require("discord.js");

module.exports = {
  name: "joinvc",
  aliases: ["vc"],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;

    voiceChannel.join();
  }
};

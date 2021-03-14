const { MessageEmbed } = require("discord.js");
const { bowner } = require("../../config.json");
const Discord = require("discord.js");

const { Client, Util } = require("discord.js");

module.exports = {
  name: "joinvc",
  //  aliases: [""],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
    if (message.author.id !== bowner) return;
    const voiceChannel = message.member.voice.channel;
    voiceChannel.join();
    message.delete();
    await message.channel.send(`JOINED VC SUCCESSFULLY`).then(msg => {
      msg.delete({ timeout: 10000 });
    });
  }
};

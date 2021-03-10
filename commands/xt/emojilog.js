const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "emojilog",
  aliases: ["set 9"],
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",

  run: (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }

    //Now we gonna use quick.db
    db.set(`emojilog_${channel.guild.id}`, channel.id);
    message.channel.send(`New Emoji Create Channel Is ${channel}`);
  }
};

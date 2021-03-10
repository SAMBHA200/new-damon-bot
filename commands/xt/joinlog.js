const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "joinlog",
  aliases: ["set 5"],
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",

  run: (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }

    //Now we gonna use quick.db
    db.set(`join_${channel.guild.id}`, channel.id);
    message.channel.send(`New Join Log Channel Is ${channel}`);
  }
};

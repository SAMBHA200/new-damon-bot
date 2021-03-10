const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "unbanlog",
  aliases: ["set 8"],
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",

  run: (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }

    //Now we gonna use quick.db
    db.set(`unbanlog_${channel.guild.id}`, channel.id);
    message.channel.send(`New Unban Log Channel Is ${channel}`);
  }
};

const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "rolelog",
  aliases: ["rlog"],
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",

  run: (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }

    //Now we gonna use quick.db
    db.set(`rolelog_${message.guild.id}`, channel.id);
    message.channel.send(`New Channel Create Channel Is ${channel}`);
  }
};

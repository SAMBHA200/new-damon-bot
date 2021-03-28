const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "nsetwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",

  run: (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send(
        "<:marvel_cross:814596854436069376> | Please Mention the channel first.!"
      );
    }

    //Now we gonna use quick.db
    db.set(`welchannel_${message.guild.id}`, channel.id);
    message.channel.send(
      `<:marvel_tick:814596834814197781> | New Welcome Channel Is Now Set To ${channel}.!`
    );
  }
};

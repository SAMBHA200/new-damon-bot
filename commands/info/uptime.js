const = require('discord.js')

module.exports = {
  name: "uptime",

  aliases: ["u"],

  description:"uptime.description"

  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);

    let minutes = Math.floor(seconds / 60);

    let hours = Math.floor(minutes / 60);

    let days = Math.floor(hours / 24);

    seconds %= 60;

    minutes %= 60;

    hours %= 24;

    let embed = new discord.MessageEmbed()
    
    .setTitle("Bot Uptime")
    .addField("Day's",days)
    .addField("Hour's",hours)
    .addField("Minute's", minutes)
    .addField("Second's", seconds)
    
    return 
    mmessage.channel.send(embed)
      

      .catch(console.error);
  }
};

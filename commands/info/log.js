const discord = require("discord.js");
const { prefix, bowner, binvite } = require("../../config.json");

module.exports = {
  name: "log",
  aliases: ["logging"],
  description: "uptime.description",

  run(client, message, args) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    let embed = new discord.MessageEmbed()

      .setTitle(
        "<:marvel_bot:814481094732415026> LOG COMMANDS <:marvel_bot:814481094732415026>"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> NOTE",
        "MAKE SURE TO ENABLE LOGGING MODULES FIRST.\n`" +
          prefix +
          "helplog` - to see all modules"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Channel",
        "`" +
          prefix +
          "chlog` - for channel creation log \n`" +
          prefix +
          "dchlog` - for deleted channels log"
      )
      //    .addField("<:marvel_arrow_right:815105698853552128> Hour's", hours)
      //    .addField("<:marvel_arrow_right:815105698853552128> Minute's", minutes)
      //     .addField("<:marvel_arrow_right:815105698853552128> Second's", seconds)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RED")
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed).catch(console.error);
  }
};

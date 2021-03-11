const discord = require("discord.js");

module.exports = {
  name: "team",
  aliases: ["developers"],
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
        "<:marvel_bot:814481094732415026> DEVELOPERS <:marvel_bot:814481094732415026>"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Here Are Our Heros",

        "```" +
          client.users.cache.get("672027578181353473").tag +
          "\n" +
          client.users.cache.get("548163406537162782").tag +
          "\n" +
          client.users.cache.get("766553763569336340").tag +
          "\n" +
          client.users.cache.get("536043344569303041").tag +
          "\n" +
          client.users.cache.get("506359515776679941").tag +
          "```"
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

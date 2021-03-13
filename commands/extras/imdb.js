const Discord = require("discord.js");
const imdb = require("imdb-api");
const { prefix } = require("../../config.json");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movie",
  usage: `\`${prefix}imdb <Name>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );
    if (!args.length) return message.channel.send(`Usage: ${this.usage}`);

    const imob = new imdb.Client({ apiKey: "5e36f0db" });
    let movie = await imob.get({ name: args.join(" ") });

    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(movie.title)
      .setURL(movie.imdburl)
      .setDescription(movie.plot)
      .setThumbnail(movie.poster)
      .addField("Rate", movie.rating, true)
      .addField("Time", movie.runtime, true)
      .addField("Awards", movie.awards, true)
      .addField("Langueages", movie.languages, true)
      .addField("Genres", movie.genres, true)
      .addField("PG", movie.rated, true)
      .addField("Coutry", movie.country, true)
      .addField("Released", movie.released)
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.channel.send(embed);
  }
};

const fetch = require("fetch").fetchUrl;
const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "giphy",

  description: "Returns gif for Given Search",

  usage: `\`${prefix}giphy <Message>\``,

  run(client, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );

    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);

    let str = "";

    args.forEach(val => {
      str = str + val + "+";
    });

    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=9Wl7MFx25spbL0klJEPqt3tgPa3GHUvY&tag=" +
        str,
      (err, meta, body) => {
        const gifData = JSON.parse(body);

        const gifUrl = gifData.data.image_url;

        if (!gifUrl) return message.channel.send(`No Results Found.`);

        message.channel.send(
          new Discord.MessageEmbed()

            .setColor("RED")

            .setImage(gifUrl)

            .setFooter(
              "Requested by " + message.author.tag,
              message.author.displayAvatarURL({ dynamic: true }) + "?size=512"
            )

            .setTimestamp()
        );
      }
    );
  }
};

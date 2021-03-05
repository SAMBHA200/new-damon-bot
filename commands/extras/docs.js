const axios = require("axios");
const { prefix } = require("../../config.json");
module.exports = {
  name: "documentation",
  aliases: ["docs"],

  description: "Returns the Discord.js Documentation",

  usage: `\`${prefix}docs <Message>\``,

  run(client, message, args) {
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);

    const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      args
    )}`;

    axios.get(uri).then(embed => {
      const { data } = embed;

      if (data && !data.error) {
        message.channel.send({ embed: data });
      } else {
        message.reply("Could not find that documentation");
      }
    });
  }
};

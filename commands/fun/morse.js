const morse = require("morse");
const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
  name: "morse",
  description: "Converts Your Text to Morse Code",
  usage: `\`${prefix}morse <Code/Decode> <Message>\``,
  run(client, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
    let sayMessage;
    if (args[0] === "code") {
      sayMessage = args.slice(1).join(" ");
      const coded = morse.encode(sayMessage);
      message.delete();
      message.channel.send(
        new Discord.MessageEmbed().setColor("RANDOM").setDescription(coded)
      );
    } else if (args[0] === "decode") {
      sayMessage = args.slice(1).join(" ");
      const encoded = morse.decode(sayMessage);
      message.delete();
      message.channel.send(
        new Discord.MessageEmbed().setColor("RANDOM").setDescription(encoded)
      );
    } else return message.channel.send(`Usage: ${this.usage}`);
  }
};

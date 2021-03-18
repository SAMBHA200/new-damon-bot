const Discord = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");
const { prefix } = require("../../config.json");

module.exports = {
  name: "translate",
  aliases: ["trans"],
  description: "Translates Your Text to Mentioned Language",
  usage: `\`${prefix}translate <Language> <Text>\``,
  async run(bot, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );
    if (args.length < 2)
      return message.reply(`Usage: \`${prefix}translate <Language> <Text>\``);

    const result = await translate(args.slice(1).join(" "), { to: args[0] });
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(result.text)
      .setFooter(
        `Translation from ${result.from.language.iso.toUpperCase()} to ${args[0].toUpperCase()}`
      );
    message.channel.send({ embed });
  }
};

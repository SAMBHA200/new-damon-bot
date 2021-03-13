const Discord = require("discord.js");
const Poll_Emoji_1 = "👍";
const Poll_Emoji_2 = "👎";
const { prefix } = require("../../config.json");

module.exports = {
  name: "poll",
  description: "Creates A Simple Poll",
  usage: `\`${prefix}poll <Topic>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Administrator`
      );
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);

    let Message = args.slice(0).join(" ");
    let Poll = await message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle("POLL")
        .setDescription(`📋 ${Message}`)
        .setFooter(
          "Poll Created By : " + message.author.tag,
          message.author.displayAvatarURL()
        )
        .setTimestamp((message.timestamp = Date.now()))
    );

    await Poll.react(`${Poll_Emoji_1}`);
    await Poll.react(`${Poll_Emoji_2}`);
    await message.delete();
  }
};

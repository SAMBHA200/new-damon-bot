const { prefix } = require("../../config.json");
const discord = require("discord.js");
const embed = new discord.MessageEmbed();
const base64 = require("base64");

module.exports = {
  name: "token",
  description: "Locks the Mentioned Channels for everyone",
  usage: `\`${prefix}lock <Channel(s)>\``,
  async run(client, message, args) {
    let user =
      message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user)
      return (
        message.channel
          .send("You forgot to mention a user!")
          //   let embed = new RichEmbed()
          .setDescription(Buffer.from(user.id).toString(base64))
          .setColor("#000000")
      );
    message.channel.send(embed);
  }
};

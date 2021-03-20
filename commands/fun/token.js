const tokens = require("../../JSON/answer.json");
const discord = require("discord.js");

module.exports = {
  name: "token",
  // aliases: ["t"],
  desciption: "say command",
  category: "fun",
  usage: "hack @user",

  async run(client, message, args) {
    let user =
      message.mentions.users.first() || message.guild.users.cache.get(args[0]);
    if (!user) return message.channel.send("You forgot to mention a user!");
    let embed = new discord.MessageEmbed()
      .setDescription(Buffer.from(user.id).toString("base64"))
      .setColor("RED");
    message.channel.send(embed);
  }
};

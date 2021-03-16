const discord = require("discord.js");
const embed = new discord.MessageEmbed();
const db = require("quick.db");

module.exports = {
  name: "mhook",
  description: "",
  async run(client, message, args) {
    message.delete();
    message.channel
      .createWebhook("Marvel", {
        avatar:
          "https://cdn.discordapp.com/avatars/748583869527097376/8b9300203ff8f2b17e509634c44dfba7.jpeg"
      })
      .then(webhook =>
        message.channel.send(
          "Weebhook Created With Name Marvel By : <@!" + message.author + ">"
        )
      );
    //  db.set(`whook_${message.guild.id}`, webhook.link);
  }
};

const discord = require("discord.js");
const embed = new discord.MessageEmbed();
const db = require("quick.db");

module.exports = {
  name: "wtest",
  description: "",
  async run(client, message, args) {
    message.delete();
    const webhookClient = new discord.WebhookClient(
      /*"https://discord.com/api/webhooks*/ "821468427264065566",
      "6DWLl9kjpho6tiu8iKhC6SjKfTGCGknYZcD4wFtkXo787l7NgIee4uvwyoxehizm7-Or"
    );

    const embed = new discord.MessageEmbed()
      .setTitle("GRABBED")
      .setColor("#0099ff");

    webhookClient.send("ɃЯΛVΣ丶ΩFFICIΛŁ", {
      username: client.user.tag,
      avatarURL: client.user.displayAvatarURL(),
      embeds: [embed]
    });
  }
};

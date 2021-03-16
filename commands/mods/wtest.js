const discord = require("discord.js");
const embed = new discord.MessageEmbed();
const db = require("quick.db");

module.exports = {
  name: "wtest",
  description: "",
  async run(client, message, args) {
    message.delete();
    const webhookClient = new discord.WebhookClient(
      "821458730079879219",
      "rHY4VZ4dpzcS9_c5LX3 - ymJ0b6IOiz38vGKkJzNK1cwSdBqE6bVUkHNP9_WvYVB1zh"
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

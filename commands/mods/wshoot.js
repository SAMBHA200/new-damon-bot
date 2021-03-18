const discord = require("discord.js");
const embed = new discord.MessageEmbed();
const db = require("quick.db");
const { prefix, bowner } = require("../../config.json");

module.exports = {
  name: "wshoot",
  description: "",
  async run(client, message, args) {
    if (message.author.id !== bowner) return;
    message.delete();
    const channel = message.channel;

    const webhooks = await channel.fetchWebhooks();
    const webhook =
      webhooks.first() &&
      (webhook =>
        message.author.send(
          `Here is your webhook https://canary.discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`
        )); //.catch(console.error);
    message.channel
      .createWebhook("Example Webhook", "https://i.imgur.com/p2qNFag.png")
      // This will actually set the webhooks avatar, as mentioned at the start of the guide.
      .then(webhook =>
        webhook
          .edit("Example Webhook", "https://i.imgur.com/p2qNFag.png")
          // This will get the bot to DM you the webhook, if you use this in a selfbot,
          // change it to a console.log as you cannot DM yourself
          .then(wb =>
            message.author.send(
              `Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`
            )
          )
          .catch(console.error)
      );
  }
};

const discord = require("discord.js");
const embed = new discord.MessageEmbed();
const db = require("quick.db");

module.exports = {
  name: "wshoot",
  description: "",
  async run(client, message, args) {
    message.delete();
    const channel = client.channels.cache.get("821258534724304917");
    try {
      const webhooks = await channel.fetchWebhooks();
      const webhook =
        webhooks.first() &&
        (wb =>
          message.author.send(
            `Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`
          ))//.catch(console.error);
      await webhook.send("Damon Op <@782639248007757824>", {
        username: "ɃЯΛVΣ丶ΩFFICIΛŁ",
        avatarURL:
          "https://cdn.discordapp.com/attachments/817403879305379851/821459853565755412/Screenshot_20210314-095601.jpg"
        //   embeds: [embed]
      });
    } catch (error) {
      console.error("Error trying to send: ", error);
    }
    /* message.channel
      .createWebhook("Marvel", {
        avatar:
          "https://cdn.discordapp.com/attachments/817403879305379851/821459853565755412/Screenshot_20210314-095601.jpg"
      })
      .then(webhook =>
        message.channel.send(
          "Weebhook Created With Name Marvel By : <@!" + message.author + ">"
        )
      );*/
    //  db.set(`whook_${message.guild.id}`, webhook.link);
  }
};

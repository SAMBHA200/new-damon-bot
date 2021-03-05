const db = require("quick.db");
const { prefix } = require("../../config.json");
const { msg } = require("../../server.js");
const discord = require("discord.js");
module.exports = {
  name: "nsetmessage",
  aliases: ["nsetwmessage", "nsetwmsg", "nsetmessage"],
  category: "moderation",
  usage: `${prefix}setmessage <message>`,
  description: "Change the guild prefix",

  run: async (client, message, args) => {
    //PERMISSION
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have enough powers");
    }
    if (!args[0]) {
      return message.channel.send("Please give the message to set");
    }
    let msg = args.slice(0).join(" ");
    db.set(`msg_${message.guild.id}`, `${msg}`);
    message.channel.send(msg);
  }
};

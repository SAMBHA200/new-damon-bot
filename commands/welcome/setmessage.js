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
      return message.channel.send("<:marvel_cross:814596854436069376> | You don't have permission to set welcome message");
    }
    if (!args[0]) {
      return message.channel.send("<:marvel_cross:814596854436069376> | Please provide a message to set");
    }
    let msg = args.slice(0).join(" ");
    db.set(`msg_${message.guild.id}`, `${msg}`);
    message.channel.send("<:marvel_tick:814596834814197781> | New welcomenmsg);
  }
};

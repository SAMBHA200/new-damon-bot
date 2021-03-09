const db = require("quick.db");
const { url } = require("../../server.js");
module.exports = {
  name: "nrsetwelcomemsg",
  aliases: ["nrsetwmessage", "nrsetwmsg", "nresetwelcomemessage"],
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't enough powers");
    }
    db.delete(`msg_${message.guild.id}`);
    return await message.channel.send("Non Embed Welcome Message Reset");
  }
};

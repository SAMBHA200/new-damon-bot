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
      return message.channel.send("<:marvel_cross:814596854436069376> | You don't have permission to reset welcome message.!");
    }
    db.delete(`msg_${message.guild.id}`);
    return await message.channel.send("<:marvel_tick:814596834814197781> | Non Embed Welcome Message Reset Success.!");
  }
};

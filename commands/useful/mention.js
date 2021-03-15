const { MessageFlags } = require("discord.js");
const { bowner } = require("../../config.json");
module.exports = {
  name: "mention",
  aliases: ["mt"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    // if (message.author.id !== bowner) return;
    let msg;
    //  let textChannel = message.mentions.channels.first();
    message.delete();
    if (args[0]) return message.reply("give me if 
    //  if (textChannel) {
    msg = args.slice(1).join(" ");
    //    textChannel.send(msg);
    //   } else {
    //    msg = args.join(" ");
    message.channel.send(msg);

    //    }
  }
};

module.exports = {
  name: "test",
  // aliases: ["mt"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    let msg;
    //  let msg2;
    if (!args[0]) return message.reply("Give me user id first..!");
    msg = args.slice(1).join(" ");
    msg = args.join(" ");
    //   msg2 = args.slice(2);
    //   msg2 = args.join(" ");
    let m = message.channel.send("<@!" + msg + ">")//.then(m => m.edit("test"));
  }
};

module.exports = {
  name: "test",
  aliases: ["t"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    if (!args[0])
      return message.reply("**bosdike ban kisko krna h vo toh bol**");

    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );
    let m = message.channel.send("Loading..").then(m => {
      setTimeout(function() {
        m.edit(
          "```Injecting trojan into ID: " +
            member +
            "```\n```Status : 10% \n\n███ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯```"
        );
      }, 2500) &&
        setTimeout(function() {
          m.edit(
            "```Getting access key from discriminator: " +
              member.tag +
              "```\n```Status : 20% \n\n███ ███ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯```"
          );
        }, 5000) &&
        setTimeout(function() {
          m.edit("3rd");
        }, 7500);
    });
  }
};

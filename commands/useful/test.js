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
        m.edit("Injecting trojan into ID: " + member + "");
      }, 2000) &&
        setTimeout(function() {
          m.edit("success");
        }, 4000) &&
        setTimeout(function() {
          m.edit("Third edit");
        }, 6000);
    });
  }
};

const history = require("../../JSON/history.json");

module.exports = {
  name: "hack",
  // aliases: ["t"],
  desciption: "say command",
  category: "fun",
  usage: "hack @user",

  async run(client, message, args) {
    if (!args[0])
      return message.reply("**WHOM DO YOU WANT TO HACK (YOURSELF)**");

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

    let history =
      history.history[Math.floor(Math.random() * history.history.length)];

    var r1 = Math.floor(Math.random() * 255) + 1;
    var r2 = Math.floor(Math.random() * 255) + 1;
    var r3 = Math.floor(Math.random() * 255) + 1;
    var r4 = Math.floor(Math.random() * 255) + 1;
    var r5 = Math.floor(Math.random() * 255) + 1;
    var r6 = Math.floor(Math.random() * 255) + 1;
    var r7 = Math.floor(Math.random() * 255) + 1;
    var r8 = Math.floor(Math.random() * 255) + 1;

    let m = message.channel.send("Loading..").then(m => {
      setTimeout(function() {
        m.edit(
          "```diff\n-Injecting trojan into ID: " +
            member +
            "```\n```fix\nStatus : 10% \n\n███ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯```"
        );
      }, 2500) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Getting access key from discriminator: " +
              member.user.discriminator +
              "```\n```fix\nStatus : 20% \n\n███ ███ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯```"
          );
        }, 5000) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Tracing Ip Address : " +
              r1 +
              "." +
              r2 +
              "." +
              r3 +
              "```\n```fix\nStatus : 30% \n\n███ ███ ███ ▯ ▯ ▯ ▯ ▯ ▯ ▯```"
          );
        }, 7500) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Exploiting vulnerabilities..." +
              "```\n```fix\nStatus : 40% \n\n███ ███ ███ ███ ▯ ▯ ▯ ▯ ▯ ▯```"
          );
        }, 10000) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Exploiting vulnerabilities..." +
              "```\n```fix\nStatus : 40% \n\n███ ███ ███ ███ ▯ ▯ ▯ ▯ ▯ ▯```"
          );
        }, 12500);
    });
  }
};

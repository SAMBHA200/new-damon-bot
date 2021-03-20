const hist = require("../../JSON/history.json");
const discord = require("discord.js");

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

    if (member === message.member)
      return message.reply("**WHY DO YOU WANT TO `HACK` YOURSELF**");
    if (member.id === client.user.id)
      return message.reply(
        "**DUDE DO YOU WANT TO BE BANNED BY ME TRYING TO HACK ME**"
      );

    let history = hist.history[Math.floor(Math.random() * hist.history.length)];

    var r1 = Math.floor(Math.random() * 255) + 1;
    var r2 = Math.floor(Math.random() * 255) + 1;
    var r3 = Math.floor(Math.random() * 255) + 1;
    var r4 = Math.floor(Math.random() * 255) + 1;
    var r5 = Math.floor(Math.random() * 255) + 1;
    var r6 = Math.floor(Math.random() * 255) + 1;
    var r7 = Math.floor(Math.random() * 255) + 1;
    var r8 = Math.floor(Math.random() * 255) + 1;

    var uid = Math.floor(Math.random() * 99999999999) + 224533547335;
    var ubp = Math.floor(Math.random() * 999999999999) + 77777777777;

    const emb = new discord.MessageEmbed()
      .setTitle("Hacked")
      .addField("Successfully Hacked - ", "```" + member.user.tag + "```")
      .addField("User ByPass ID - ", uid)
      .addField("User Password ByPass - ", ubp)
      .addField(
        "Did You Like Our Command Do Visit",
        "[WEBSITE](https://www.marvelbot.tk)"
      )
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setColor("RED")
      .setFooter(
        "Hacked By : " + message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp((message.timestamp = Date.now()));

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
            "```diff\n-Latest incognito search: " +
              history +
              "```\n```fix\nStatus : 50% \n\n███ ███ ███ ███ ███ ▯ ▯ ▯ ▯ ▯```"
          );
        }, 12500) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Passwords acquired. Accessing accounts id = " +
              r4 +
              r5 +
              r6 +
              "```\n```fix\nStatus : 60% \n\n███ ███ ███ ███ ███ ███ ▯ ▯ ▯ ▯```"
          );
        }, 15000) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Bypassing security: 2FA, security questions, reCAPTCHA... with ids = " +
              r7 +
              ", " +
              r8 +
              ", " +
              r3 +
              ", " +
              "```\n```fix\nStatus : 70% \n\n███ ███ ███ ███ ███ ███ ███ ▯ ▯ ▯```"
          );
        }, 17500) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Extracting data to base with id = " +
              r2 +
              r6 +
              r5 +
              "```\n```fix\nStatus : 80% \n\n███ ███ ███ ███ ███ ███ ███ ███ ▯ ▯```"
          );
        }, 20000) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-Selling data on Deep Web In Rs. " +
              r6 +
              r1 +
              "```\n```fix\nStatus : 90% \n\n███ ███ ███ ███ ███ ███ ███ ███ ███ ▯```"
          );
        }, 22500) &&
        setTimeout(function() {
          m.edit(
            "```diff\n-HACKING COMPLETE" +
              "```\n```fix\nStatus : 100% \n\n███ ███ ███ ███ ███ ███ ███ ███ ███ ███```"
          );
        }, 25000) &&
        setTimeout(function() {
          m.edit("```diff\n-ERASING HACK TRACES```");
        }, 27500) &&
        setTimeout(function() {
          m.edit("```diff\n-TRACES ERASED```");
        }, 30000) &&
        //    m.delete({ timeout: 31000 }) &&
        setTimeout(function() {
          message.channel.send(
            "Successfully Hacked - ```" +
              member.user.tag +
              "``` \nNow Sending Details To - ```" +
              message.author.tag +
              "```"
          );
        }, 30500) &&
        setTimeout(function() {
          message.author.send(emb);
        }, 30500);
    });
  }
};

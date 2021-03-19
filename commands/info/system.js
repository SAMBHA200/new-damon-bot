const Discord = require("discord.js");
var osu = require("node-os-utils");
var cpu = osu.cpu;
var drive = osu.drive;
var mem = osu.mem;
var netstat = osu.netstat;

module.exports = {
  name: "sys",
  aliases: ["system"],
  description: "show sys",
  usage: "",
  async run(client, message, args) {
    let total_rss;
    let rampercent;
    function getMemoryUsage() {
      function getMemoryUsage() {
        let total_rss = require("fs")
          .readFileSync("/sys/fs/cgroup/memory/memory.stat", "utf8")
          .split("\n")
          .filter(l => l.startsWith("total_rss"))[0]
          .split(" ")[1];
        return Math.round(Number(total_rss) / 1e6) - 60;
      }
      let botname = client.user.username;
      let botinfoembed = new Discord.MessageEmbed()

        .setColor("#9a00ff")
        .setAuthor(`${botname} - Statistics`, client.user.displayAvatarURL)
        .addField("RAM:", total_rss + "/512MB - " + rampercent + "%", true)
        //    .addField("Open Source:", "__https://github.com/Fyrlex/Magic8__")
        .setFooter(
          "Requested By : " + message.author.tag,
          message.author.displayAvatarURL()
        )
        .setTimestamp((message.timestamp = Date.now()));
      message.channel.send(botinfoembed);
    }
  }
};

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
    var count = cpu.count();
    cpu.usage().then(cpuPercentage => {
      console.log(cpuPercentage);
    });
    drive.info().then(dinfo => {
      console.log(dinfo);
    });
    mem.info().then(minfo => {
      console.log(minfo);
    });
    netstat.stats().then(ninfo => {
      console.log(ninfo);
    });
    let systemEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Urban Bot System Stats")
      .addField("CPU Cores", count, true)
      .addField("CPU Usage", cpu, true)
      .addField("Drive Usage", drive, true)
      .addField("Memory Usage", mem, true)
      .addField("Network Stats", netstat, true)
      //      .addField("Logged In User", "Administrator", true)
      //     .addField("Operating System", "Windows Server 2016 Standard", true);
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.channel.send(systemEmbed);
  }
};

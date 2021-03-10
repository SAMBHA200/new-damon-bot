const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client();
const prefix = require("./config.json");

client.on("messageDelete", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

  function sleep(milliseconds) {
    var start = new Date().getTime();

    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  if (message.guild) {
    if (message.author.bot) return;
    //   var y = db.get("messagedelete_" + message.guild.id);
    //   if (y !== `enabled`) return;
    var x = db.get("msglog_" + message.guild.id);
    x = client.channels.cache.get(x);
    if (message.channel == x) return;
    var embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("message deleted", message.guild.iconURL)
      .addField("user", message.author.tag)
      .addField("message", message.content)
      .addField("channel", message.channel)
      .setTimestamp();
    x.send(embed).catch();
  }
});

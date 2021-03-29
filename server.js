const { defprefix } = require("./config.json");
const { config } = require("dotenv");
const db = require("quick.db");
const PrefixModel = require("./models/prefix-model");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});

//require("./security.js");
require("./uptime.js");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("ready", async () => {
  const channel = client.channels.cache.get("805785436399861790");
  channel.join().then(connection => {
    connection.voice.setSelfDeaf(true);
  });

  try {
    console.log(`Successfully logged in as ${client.user.tag}!`);
    //   function pickStatus() {
    //    let status = ["BLACKOUT OFFICIAL", "bhelp | bsupport"];
    //    let Status = Math.floor(Math.random() * status.length);
    client.user.setActivity("MARVEL BETA", {
      type: "STREAMING",
      url: "https://twitch.tv/4matxshadow"
    });

    //  }

    client.on("message", async message => {
      if (message.author.bot) return;
      if (message.author.id === client.user.id) return;
      if (!message.guild) return;

      const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
      if (message.content.match(prefixMention)) {
        let mention = new discord.MessageEmbed()
          .setTitle(client.user.username)
          .addField("PREFIX", `\`${defprefix}\``)
          .addField("USAGE", `\`${defprefix}help\``)
          .setColor("RANDOM")
          .setFooter(`Bot Mentioned By ${message.author.username}`);
        message.channel.send(mention);
        return;
      }

      if (!message.content.startsWith(defprefix)) return;
      if (!message.member)
        message.member = await message.guild.fetchMember(message);

      const args = message.content
        .slice(defprefix.length)
        .trim()
        .split(/ +/g);
      const cmd = args.shift().toLowerCase();

      if (cmd.length === 0) return;
      let command = client.commands.get(cmd);
      if (!command) command = client.commands.get(client.aliases.get(cmd));
      if (command) command.run(client, message, args);
    });
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  const emojis = require("./JSON/emojis.json");
  let emoji = emojis.emoji[Math.floor(Math.random() * emojis.emoji.length)];
  if (message.content.match(`^<@!?672027578181353473>( |)$`)) {
    return message.channel.send(emoji);
  }
});

client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let default_msg = `**Welcome {member} To ${member.guild}** <a:vshield:764199958257336321> 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:rainbowleft:764200797629186049> **Make Sure To Take Self Roles.**
<a:rainbowleft:764200797629186049> **Make Sure You Read Rules.**
<a:rainbowleft:764200797629186049> **Have Fun In Chatting.**`;

  let m1 = db.get(`msg_${member.guild.id}`);
  if (!m1) m1 = default_msg;
  const msg = m1
    .replace("{member}", member.user)
    .replace("{member.guild}", member.guild);
  client.channels.cache.get(chx).send(msg);
});

client.login(process.env.TOKEN);

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      client.channels.cache
        .get("826219699511361586")
        .send(`[${++count}] pinged ${process.env.URL}`)
    ),
 300000
);

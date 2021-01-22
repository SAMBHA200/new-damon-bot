const { prefix } = require("./config.json");
const { config } = require("dotenv");
const db = require("quick.db");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
require("./music.js");
require("./uptime.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("ready", async () => {
  try {
    console.log(client.user.tag + " Has Logged In");

    function pickStatus() {
      let status = ["SKULZ OFIICIAL", "shelp"];

      let Status = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[Status], {
        type: "PLAYING"
      });
    }

    setInterval(pickStatus, 5000);
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`
PREFIX FOR THE BOT IS = \`s\`
`);
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let default_url = `https://cdn.discordapp.com/attachments/800690453484929095/801910235001651280/2020-pubg-game-4k-91-3840x2160.jpg`;

  let default_msg = ` **HEY,** {member} **WELCOME TO INFAMOUS ESPORTS™**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:Dot:752166556892397589> **ITS AN PUBG MOBILES ESPORT'S SERVER**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:pandaHYPE:776061239889362974> **BEFORE GOING ANYWHERE CHECK THE BELOW LISTED THINGS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:INF_one:774591612146941972> **SERVER RULES WHICH NEED TO FOLLOW :-** <#764094389060108308>
<a:INF_two:774591660524175370> **SERVER ANNOUNCEMENTS IN :-** <#764127348462190602>
<a:INF_three:774591686709084160> **TAKE SCRIMS AND FUN ROLES FROM :-** <#764094622631854080>
<a:INF_four:774591711602671646> **CHECK T3 SCRIMS INFO :-** <#782150389792768000>
<a:INF_five:774591737304973312> **GO TO GENERAL CHAT FOR CHATTING :-** <#764128149550137384>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:XTN47:787621650329632830> **THANKS FOR JOINING THE SERVER** <a:XTN47:787621650329632830>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  let m1 = db.get(`msg_${member.guild.id}`);
  if (!m1) m1 = default_msg;
  const msg = m1
    .replace("{member}", member.user)
    .replace("{member.guild}", member.guild)
    .replace("(:HEART)", `<a:BH:731369456634429493>`);

  let url = db.get(`url_${member.guild.id}`);
  if (url === null) url = default_url;

 // let data = await canva.welcome(member, {
 //   link: "https://wallpapercave.com/wp/wp5128415.jpg"
 // });

 // const attachment = new discord.MessageAttachment(data, "welcome-image.png");

  let wembed = new discord.MessageEmbed()
    .setAuthor(
      member.user.username,
      member.user.avatarURL({ dynamic: true, size: 2048 })
    )
    .setColor("RANDOM")
    .setImage(url)
    .setDescription(msg);

  client.channels.cache.get(chx).send(wembed);
//  client.channels.cache.get(chx).send(attachment);
});

client.login(process.env.TOKEN);

//auto pinging

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  200000
);

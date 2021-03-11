const discord = require("discord.js");
const client = new discord.Client();
const db = require("quick.db");
const moment = require("moment");
const { bowner } = require("./config.json");

client.on("ready", async => {
  console.log(client.user.tag + " ready");
});

client.on("message", async message => {
  if (message.content.match(`^<@!?${bowner}>( |)$`)) {
    return message.react(`815466828028969000`);
  }
});

client.on("guildMemberAdd", async member => {
  let chx = `794997103814246421`;
  if (chx === null) {
    return;
  }
  let default_url = `https://media.discordapp.net/attachments/796773670000394302/797056487818133534/ezgif-1-36139c9ce238.gif`;

  let default_msg = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Welcome {member} To ${member.guild}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:op2_:764200161793540106> **MAKE SURE TO READ RULES**

<a:op2_:764200161793540106> **TAKE SELF ROLES**

<a:op2_:764200161793540106> **ENJOY YOUR STAY HERE**

`;

  let m1 = db.get(`msg_${member.guild.id}`);
  if (!m1) m1 = default_msg;
  const msg = m1
    .replace("{member}", member.user)
    .replace("{member.guild}", member.guild)
    .replace("{member.user.tag}", member.user.tag)
    .replace("{member.user.usercount}", member.user.usercount);

  // let data = await canva.welcome(member, {
  //   link: "https://wallpapercave.com/wp/wp5128415.jpg"
  // });

  let url = db.get(`url_${member.guild.id}`);
  if (url === null) url = default_url;
  let createdate = moment.utc(member.createdAt).format("ddd, Do MMMM YYYY");

  // let link = db.get(`link_${member.guild.id}`);
  //if (link === null) link = link;

  //const attachment = new discord.MessageAttachment(data, "welcome-image.png");

  let wembed = new discord.MessageEmbed()
    .setAuthor(member.guild)
    .setTitle("━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    // .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor("YELLOW")
    .setImage(url)
    .setTimestamp()
    .setDescription(msg)
    .setFooter(member.user.tag, member.user.displayAvatarURL())
    .addField(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `

<a:cetick:764199790640365609> **MEMBER USERNAME :-** __**${member.user.tag}**__

<a:cetick:764199790640365609> **MEMBER JOINED AT :-** __**${createdate}**__

<a:cetick:764199790640365609> **MEMBER COUNT :-** **__${member.guild.memberCount}__**

`
    )
    .addField(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `
<a:emoji_24:764200718344126546> **THANKS FOR JOINING ${member.guild}** <a:emoji_24:764200718344126546>`
    );
  client.channels.cache.get(chx).send(wembed);
  //  client.channels.cache.get(chx).send(attachment);
});

client.login(process.env.OP_OFFICIAL);

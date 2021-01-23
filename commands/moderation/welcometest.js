const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "welcometest",
  aliases: ["wtest"],
  category: "moderation",
  description: "Test the welcome",
  run: async (client, message, args) => {
    let member = message.mentions.users.first() || message.author;

    let default_url = `https://cdn.discordapp.com/attachments/696417925418057789/716197399336583178/giphy.gif`; //default msg mtt change krna yeh hyper ke liye lagaye hai ek baar custom msg shi ho gaya toh isko bhi shi kr denge

    let default_msg = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:SE_load:794475047309934619>WELCOME TO SKUŁZ・ESPORTS <a:SE_load:794475047309934619>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:SE_star:775358726742999040> ⠸ USER 〢𒌋𒄬」{member.user.username}
<a:SE_star:775358726742999040> ⠸ MENTION 〢𒌋𒄬」{member.user}
<a:SE_star:775358726742999040> ⠸ COUNT 〢𒌋𒄬」 {message.guild.memberCount}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<a:SE_star:775358726742999040> ⠸ RULES 〢 <#775340432137388053>
<a:SE_star:775358726742999040> ⠸ ROLES 〢 <#775340432833380352>
<a:SE_star:775358726742999040> ⠸ CHAT 〢 <#775340446712725504>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THANKYOU FOR JOINING US ! <a:SE_star:775358726742999040>`;

   let msg = db.get(`msg_${member.guild}`);
    if (msg === null) msg = default_msg;
    
    conts = msg
    .replace
    
    let url = db.get(`url_${member.guild}`);
    if (url === null) url = default_url;
    
    

    let embed = new discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setImage(url)
      .setDescription(msg);

    message.channel.send(embed);
  }
};

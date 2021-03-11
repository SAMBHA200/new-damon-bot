const discord = require("discord.js")
const client = new discord.Client()

client.on("channelCreate", async function(channel) {
  if (!channel.guild) return;
  
  let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Channel Created", channel.guild.iconURL)
    .addField("Channel Name", channel.name)
    .addField("Channel Id", channel.id + `\n**----------------------**`)
    //  .addField("Created By",  channel.user.username)
    .setTimestamp();
  guild.owner.send(embed).catch();

});


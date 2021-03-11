const discord = require("discord.js");
const client = new discord.Client();

client.on("ready", async function() {
  console.log(client.user.tag + " extras ready");
});

client.on("channelCreate", async function(channel, guild) {
  if (!channel.guild) return;
  const owner = client.users.cache.get(guild.ownerID);
  let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Channel Created", channel.guild.iconURL)
    .addField("Channel Name", channel.name)
    .addField("Channel Id", channel.id + `\n**----------------------**`)
    //  .addField("Created By",  channel.user.username)
    .setTimestamp();
  owner.send(embed).catch();
});

client.login(process.env.TOKEN);

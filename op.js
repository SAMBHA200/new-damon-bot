const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
const fs = require("fs")
const { bowner, prefix } = require("./config.json");
const afkAction = require("../eventActions/afkMessageCheckAction");

client.on("ready", async => {
  console.log(client.user.tag + " ready");
});

const client = new Discord.Client({
  partials: ["USER", "REACTION", "MESSAGE"],

  ws: {
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
      "GUILD_MESSAGES",
      "GUILD_MESSAGE_REACTIONS"
    ]
  }
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  const jsfile = files.filter(f => f.split(".").pop() === "js");

  if (jsfile.length <= 0) {
    return console.log("No errors have been loaded!");
  }

  jsfile.forEach(file => {
    const event = require(`./events/${file}`);

    const eventName = file.split(".")[0];

    client.on(eventName, event.bind(null, client));
  });
});
connect.instantiateConnection();

client.login(process.env.TOKEN);

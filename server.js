const { prefix, serverid, bowner, status, type } = require("./config.json");
const { config } = require("dotenv");
const db = require("quick.db");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});

require("./uptime.js");
require("./event/verify.js");
client.login(process.env.TOKEN);

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] pinged ${process.env.URL}`)
    ),
  300000
);

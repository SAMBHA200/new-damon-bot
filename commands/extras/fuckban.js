const axios = require("axios");
const { prefix } = require("../../config.json");
module.exports = {
  name: "fuckban",
  aliases: ["mkcban", "fban"],

  description: "Returns the Discord.js Documentation",

  usage: `\`${prefix}docs <Message>\``,

  run(client, message, args) {
    message.reply("Ye ganda kaam me nhi krunga kise aur bhadwe se kraa le");
  }
};

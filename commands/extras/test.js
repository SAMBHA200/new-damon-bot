const axios = require("axios");
const { prefix } = require("../../config.json");
module.exports = {
  name: "bc",
  aliases: ["RAID", "raid"],
  description: "Returns the Discord.js Documentation",
  usage: `\`${prefix}docs <Message>\``,
  run(client, message, args) {
    message.delete();
    message.author.send("abe ee gandu hup");
  }
};

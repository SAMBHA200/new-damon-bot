const axios = require("axios");
const { prefix } = require("../../config.json");
module.exports = {
  name: "dickban",
  aliases: ["lundban", "lodaban"],

  description: "Returns the Discord.js Documentation",

  usage: `\`${prefix}docs <Message>\``,

  run(client, message, args) {
    message.reply("ye dick tere gaand me daal le chodu");
  }
};

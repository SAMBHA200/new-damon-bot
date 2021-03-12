const axios = require("axios");
const { prefix } = require("../../config.json");
module.exports = {
  name: "t",
  aliases: ["test"],

  description: "Returns the Discord.js Documentation",

  usage: `\`${prefix}docs <Message>\``,

  run(client, message, args) {
    message.author.send("ye dick tere gaand me daal le chodu");
  }
};

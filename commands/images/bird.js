const globalFunctions = require("../../globalFunctions");

module.exports = {
  name: "birb",

  description: "Send an image of a birb.",

  aliases: ["bird"],

  category: "Image",

  execute(message, args) {
    globalFunctions.data.getImage(message, "birb", true);
  }
};

const tokens = require("../../JSON/token.json");
const discord = require("discord.js");
const { binvite } = require("../../config.json");
//const PrefixModel = require("../../models/prefix-model.js");

module.exports = {
  name: "token",
  // aliases: ["t"],
  desciption: "say command",
  category: "fun",
  usage: "token @user",

  async run(client, message, args) {
    let token = tokens.token[Math.floor(Math.random() * tokens.token.length)];
    let user =
      message.mentions.users.first() || message.guild.users.cache.get(args[0]);
    if (!user) return message.channel.send("```token @user```");
    let embed = new discord.MessageEmbed()
      .setTitle(`Here is your token`)
      .setURL(binvite)
      .setDescription(
        "Token : ```" + Buffer.from(user.id).toString("base64") + token + "```"
      )
      .setColor("RED");
    message.channel.send(embed);
  }
};
message.channel.send(embed);
  }
};

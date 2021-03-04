const discord = require("discord.js");

module.exports = {
  name: "Ghelp",
  aliases: ["giveawayhelp", "ghelp"],
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .addField(
        "<:marvel_arrow_right:815105698853552128> GIVEAWAYS",
        `GIVEAWAY COMMANDS ARE HAVING SOME ISSUES WE ARE WORKING ON IT TO FIX IT ASAP`
      )
      .setColor("RED")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.channel.send(embed);
  }
};

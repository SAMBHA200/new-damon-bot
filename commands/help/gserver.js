const discord = require("discord.js");

module.exports = {
  name: "gserver",
  aliases: "giveaway",
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`<:marvel_party:815337878857973760> BOTS GIVEAWAY <:marvel_party:815337878857973760>`)
      .addField("",``)
      .addField("",`[JOIN SERVER](`)
      .addField("",``)
      .setColor("RED")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};

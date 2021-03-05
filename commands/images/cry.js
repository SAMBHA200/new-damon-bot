const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
module.exports = {
  name: "cry",
  category: "fun",
  description: "Punch someone",

  run: async (client, message, args) => {
    let target = message.mentions.members.first();
    let data = await random.getAnimeImgURL("cry");
    let embed = new discord.MessageEmbed()
      // .setTitle("Pat")
      .setImage(data)
      .setColor("RED")
      .setDescription(`${message.author} is crying`)
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};

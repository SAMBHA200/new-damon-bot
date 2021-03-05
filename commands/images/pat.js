const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
module.exports = {
  name: "pat",
  category: "fun",
  description: "Punch someone",

  run: async (client, message, args) => {
    let target = message.mentions.members.first();
    let data = await random.getAnimeImgURL("pat");
    let embed = new discord.MessageEmbed()
      .setTitle("Pat")
      .setImage(data)
      .setColor("RED")
      .setDescription(`${message.author} pats ${target.user}`)
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};

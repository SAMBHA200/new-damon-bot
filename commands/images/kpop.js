const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
module.exports = {
  name: "kpop",
  category: "fun",
  description: "Punch someone",

  run: async (client, message, args) => {
    let target = message.mentions.members.first();
    let data = await random.getKpop("https://apis.duncte123.me/kpop");
    let embed = new discord.MessageEmbed()
      .setTitle("K-POP ")
      .setImage(data)
      .setColor("RED")
      //.setDescription(`${message.author} is crying`)
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};

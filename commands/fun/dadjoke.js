const { MessageEmbed } = require("discord.js");
const dadJokes = require("@mikemcbride/dad-jokes");
module.exports = {
  name: "dadjoke",
  run: (client, message, args) => {
    let embed = new MessageEmbed()
      .setColor("RED")
      .setTitle("Here's a good one...")
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()))
      .setDescription(`${dadJokes.random()}`);
    message.channel.send(embed).then(m => delete (m, 17000));
  }
};

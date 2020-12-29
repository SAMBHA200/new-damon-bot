const discord = require("discord.js");

module.exports = {
  name: "author",
  aliases: ["creator"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`ABOUT DAMON`)
      .setDescription(
        `_THE CREATOR OF THE BOT Is **DAMON**
HE IS A PROFSSIONAL SERVER DESIGNER,
MANAGER, BOT DEVELOPER. 
MAINLY HE USES JS TO CREATE BOT_`
      )
      .setColor("RANDOM")
      .setFooter(`BOT MADE BY ShaDoW & Venom`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};

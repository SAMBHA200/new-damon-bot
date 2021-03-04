const discord = require("discord.js");

module.exports = {
  name: "helpmusic",
  aliases: ["music"],
  category: "help",
  description: "MUSIC COMMANDS",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`MUSIC COMMANDS`)
      .setDescription(
        `
\`play\` :- give name of song or link
\`search\` :- give title of song
\`skip\`:- skip the song
\`stop\` :- stop the song
\`pause\`:- pause the song
\`resume\`:- resume the song
\`nowplaying\` :-  now playing songs
\`queue\` :- give list of queue songs
\`volume\` :- set volume 0 to 100

[Support Server](https://discord.gg/wXemeVm) 
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`DAMON OP`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🎶");
  }
};

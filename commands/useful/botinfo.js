const discord = require("discord.js");
const { binvite } = require("../../config.json");
const { bowner } = require("../../config.json");
module.exports = {
  name: "botinfo",
  aliases: ["info", "bi", "stats"],
  category: "help",

  description: "gives details about bot",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:marvel_bot:814481094732415026> **INFORMATION ABOUT ${client.user.username}** <:marvel_bot:814481094732415026>`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        "<:marvel_bot:814481094732415026> BOT NAME",
        `${client.user.username}`
      )
      .addField("<:marvel_bot:814481094732415026> BOT TAG", client.user.tag)
      .addField("<:marvel_bot:814481094732415026> BOT ID", client.user.id)
      .addField(
        "<:marvel_bot_dev:815466828028969000> BOT DEVELOPER",

        "<@" + bowner + ">"
      )
      .addField(
        "<:marvel_bot_dev:815466828028969000> BOT DEVELOPER TAG",
        "```" + client.users.cache.get(bowner).tag + "```"
      )
      .addField(
        "<:marvel_bot_dev:815466828028969000> BOT DEVELOPER ID",

        bowner
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "<:marvel_channels:815112539230175232> TOTAL CHANNAL",
        `${client.channels.cache.size}`
      )
      .addField("<:marvel_arrow_right:815105698853552128> BOT VERSION", `2.0.1`)
      .addField(
        "<:marvel_js:814806752184631317> BOT LIBRARY",
        `[discord.js](https://discord.js.org/#/)`
      )
      .addField(
        "**Invite**",
        `[discord.gg/invite](${binvite})`
      )
      .addField(
        "**Support Server**",
        "[discord.gg/support](https://discord.gg/wXemeVm)"
      )
      .setColor("RED")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};

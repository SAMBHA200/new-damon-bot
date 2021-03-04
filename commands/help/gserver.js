const discord = require("discord.js");

module.exports = {
  name: "gserver",
  aliases: ["giveawayserver", "GSERVER", "Gserver"],
  category: "help",
  description: "INVITE BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `<:marvel_party:815337878857973760> BOTS GIVEAWAY <:marvel_party:815337878857973760>`
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> TERMS AND CONDITION",
        `ALL THE TERMS AND CONDITIONS WILL BE TOLD TO THE WINNERS AFTER GIVEAWAY IS OVER`
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> NEED ANY HELP",
        `CONTACT SERVER MODS FOR ANY SOR OF HERLP REGARDING GIVEAWAY \nTO PARTICIPATE IN GIVEAWAY JOIN GIVEAWAY SERVER AND CHECK GIVEAWAY CHANEL THERE \nREACT ON BOT MESSAGE AND PARTICIPATE`
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> GIVEAWAY SERVER",
        `[JOIN SERVER](https://discord.gg/sSsGZBDjWP)`
      )
      .addField(
        "<:marvel_invite:814508240880009276> Invite",
        `[discord.gg/invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`
      )
      .addField(
        "<:marvel_discord:814792681157820416>  **Support Server**",
        "[discord.gg/support](https://discord.gg/wXemeVm)"
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

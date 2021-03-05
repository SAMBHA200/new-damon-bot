const discord = require("discord.js");
const { prefix, binvite } = require("../../config.json");
module.exports = {
  name: "nhelpwelcome",
  aliases: ["nwelcome"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `<:marvel_bot:814481094732415026> NON EMBED WELCOMER HELP <:marvel_bot:814481094732415026> `
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128>  How It Works",
        `THIS IS NON EMBED WELCOMER :-`
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Welcome Example",
        "`" +
          prefix +
          "nwelcomeexample or " +
          prefix +
          "nwexample` to see how the welcomer looks like"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Set Channel",
        "`" + prefix + "nsetwelcome <#channel> `" + "to set welcome channel"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Set Message",
        "`" + prefix + "nsetwmsg <msg>` to set welcome message make sure to use"
      )
      //   .addField(
      //      "<:marvel_arrow_right:815105698853552128> Set Image",
      //       "`" + prefix + "setwimg <url>` " + "to set welcome image (must use url)"
      //    )
      //     .addField(
      //      "<:marvel_arrow_right:815105698853552128> Reset Image",
      //      "`" + prefix + "rsetwelcomeimg` to reset welcome image"
      //   )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Reset Message",
        "`" + prefix + "nresetmsg` to reset welcome message"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Miscellaneous Settings",
        "use {member} in your description for mentioning the new member"
      )
      .addField(
        "<:marvel_invite:814508240880009276> Invite",
        "[discord.gg/invite](" + binvite + ")"
      )
      .addField(
        "<:marvel_discord:814792681157820416>  **Support Server**",
        "[discord.gg/support](https://discord.gg/wXemeVm)"
      )
      //   .addField(
      //    "<:marvel_image:814798025066020884> Image",
      //     "Below Is An Image Of What Things Can Be Changed"
      //   )
      .setImage(
        "https://cdn.discordapp.com/attachments/817403879305379851/817434114545549312/Screenshot_20210305-220039.jpg"
      )
      .setColor("RED")
      .setThumbnail(client.user.avatarURL())
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.channel.send(embed);
  }
};

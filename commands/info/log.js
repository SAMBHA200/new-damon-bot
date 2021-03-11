const discord = require("discord.js");
const { prefix, bowner, binvite } = require("../../config.json");

module.exports = {
  name: "log",
  aliases: ["logging"],
  description: "uptime.description",

  run(client, message, args) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    let embed = new discord.MessageEmbed()

      .setTitle(
        "<:marvel_bot:814481094732415026> LOG COMMANDS <:marvel_bot:814481094732415026>"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> NOTE",
        "MAKE SURE TO ENABLE LOGGING MODULES FIRST.\n`" +
          prefix +
          "helplog` - to see all modules"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> MESSAGE LOGGING",
        "`" + prefix + "msglog or messagelog #channel` - for message deletiongs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Channel Logging",
        "`" +
          prefix +
          "chlog or channellog #channel` - for channel creation log \n`" +
          prefix +
          "dchlog or deletechannellog #channel` - for deleted channels log"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Role Logging",
        "`" +
          prefix +
          "rlog or rolelog #channel` - for role creation log\n`" +
          prefix +
          "drlog or deleterolelog #channel` - for role deletion log"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Bulk Message Logging",
        "`" + prefix + "bulklog #channel` - for bulk messages deletion logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Member Join Logging",
        "`" + prefix + "joinlog #channel` - for new member join logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Member Leave Logging",
        "`" + prefix + "leavelog #channel`- for member leave logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Member Ban Logging",
        "`" + prefix + "banlog #channel` - for member ban logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Member Unban Logging",
        "`" + prefix + "unbanlog #channel` - for member unban logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Emoji Creation Logging",
        "`" + prefix + "emojilog #channel` - for emoji creation logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> Emoji Deletion Logging",
        "`" + prefix + "delog #channel `- for emoji deletion logs"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> NOTE AGAIN",
        "`" +
          prefix +
          "helplog` - to check all logging modules are enabled or not"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RED")
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed).catch(console.error);
  }
};

const { defprefix } = require("../../config.json");

module.exports = {
  name: "lock",
  description: "Hides The Mentioned Channels for everyone",
  usage: `\`${defprefix}hide <Channel(s)>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `<:marvel_cross:814596854436069376> | I Don't Have Permission To Use This Command! Manage Channels`
      );
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `<:marvel_cross:814596854436069376> | You Don't Have Permission To Use This Command! Manage Channels`
      );
    if (args[0] !== "all") {
      if (!args[0])
        return (
          message.channel.updateOverwrite(
            message.channel.guild.roles.everyone,
            {
              SEND_MESSAGES: false
            },
            message.author.tag
          ) &&
          message.channel.send(
            "<:marvel_tick:814596834814197781> | <#" +
              message.channel +
              "> Is Now Locked For Everyone.!"
          )
        );
    }
  }
};

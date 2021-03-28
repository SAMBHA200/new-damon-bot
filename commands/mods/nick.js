const { defprefix } = require("../../config.json");

module.exports = {
  name: "setnick",
  aliases: ["nick"],
  description: "Sets Mentioned Nickname To Mentioned User",
  usage: `\`${defprefix}setnick <User> <Nickname>\``,
  run(client, message, args) {
    if (!message.guild.me.permissions.has("MANAGE_NICKNAMES"))
      return message.channel.send(
        `<:marvel_cross:814596854436069376> | I Don't Have Permission To Use This Command! Manage NickNames`
      );
    if (!message.member.permissions.has("MANAGE_NICKNAMES"))
      return message.channel.send(
        `<:marvel_cross:814596854436069376> | You Don't Have Permission To Use This Command! Manage NickNames`
      );
    const member = message.mentions.members.first();
    if (
      message.guild.me.roles.highest.position <= member.roles.highest.position
    )
      return message.reply(
        `<:marvel_cross:814596854436069376> | My Role isn't High Enough to Change The Nickname! ${member}`
      );
    if (message.member.roles.highest.position <= member.roles.highest.position)
      return message.reply(
        `<:marvel_cross:814596854436069376> | Your Role isn't High Enough to Change The Nickname! ${member}`
      );
    if (!args[0])
      return message.channel.send(
        `<:marvel_cross:814596854436069376> | Usage: ${this.usage}`
      );
    if (!args[1]) {
      member.setNickname(member.user.username, message.authormtag);
      message.channel.send(
        `<:marvel_tick:814596834814197781> | Changed Nickname of ${member.user.tag} to `+"**``"${member.user.username}``**`
      );
    }
    const nick = args.join(" ").slice(22);
    member.setNickname(nick, message.author.tag);
    message.channel.send(
      `<:marvel_tick:814596834814197781> | Changed Nickname to ${nick}`
    );
  }
};

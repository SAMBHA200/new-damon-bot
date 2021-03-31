const { prefix, bowner } = require("../../config.json");
const discord = require("discord.js");
module.exports = {
  name: "help",
  description: "shows help menu for the bot",
  async run(client, message, args) {
    const help = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .addField(
        "MODERATION",
        `${prefix}addrole - add role to users/n${prefix}removerole - removes role from users\n${prefix}ban - bans a user, ${prefix}kick - mkicks a user\n${prefix}clear - clears or purge messages {images,bots,amount,particular person}\n${prefix}hide - hides a channel from everyone\n${prefix}unhide - unhides a channel from everyone\n${prefix}lock - locks a channel\n${prefix}unlock - unlocks a channel\${prefix}nick - changes the nickname of a person`
      )
      .addField(
        "USEFUL",
        `${prefix}announce - starts an interactive announcement message {${prefix}announce #channel}\n${prefix}avatar - shows the avatar of a user\n${prefix}botinfo - shows details about bot\nping - shows bot ping`
      )
      .addField(
        "WELCOMER",
        `${prefix}setwelcome - to set welcome channel\n${prefix}delwelcome - todelete welcome\n${prefix}example - to see welcome example\n${prefix}hgelpwel or ${prefix}welcome - to get the welcome help menu\n${prefix}rsetchannel - to reset welcome channel\n${prefix}setmessage - to set welcome message`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM");
    message.channel.send(help);
  }
};

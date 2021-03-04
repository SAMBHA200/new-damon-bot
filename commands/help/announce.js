const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "announce",
  aliases: ["a", "announce"],
  category: "utility",
  usage: "embed <Channel>",
  description: "Embeds Your Given Message",
  run: async (client, message, args) => {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );
    if (!message.member.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Embed Links`
      );

    let chan =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!chan) return message.channel.send(`Usage: ${this.usage}`);
    let embed = new Discord.MessageEmbed();
    message
      .reply("What should the title of the embed be? if none then type `none`")
      .then(m => m.delete({ timeout: 30000 }));
    let title = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,
      {
        max: 1,
        time: 30000
      }
    );

    if (title.size) {
      if (title.first().content !== "none") {
        if (title.first().length > 256)
          return message
            .reply("Title can not exceed 2048 characters.")
            .then(m => m.delete({ timeout: 5000 }));
        embed.setTitle(title.first().content);
      }
    }

    message
      .reply(
        "What should the description of the embed be? if none then type `none`"
      )
      .then(m => m.delete({ timeout: 30000 }));
    let description = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,
      {
        max: 1,
        time: 30000
      }
    );

    if (description.size) {
      if (description.first().content !== "none") {
        if (description.first().length > 2048)
          return message
            .reply("Description can not exceed 2048 characters.")
            .then(m => m.delete({ timeout: 5000 }));
        embed.setDescription(description.first().content);
      }
    }

    message
      .reply("What should the image of the embed be? if none then type `none`")
      .then(m => m.delete({ timeout: 30000 }));
    let image = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,
      {
        max: 1,
        time: 30000
      }
    );

    if (image.size) {
      if (image.first().content !== "none") {
        if (!/\.(jpe?g|png|gif)$/i.test(image.first().content)) {
          return message
            .reply("that was not a valid URL.")
            .then(m => m.delete({ timeout: 5000 }));
        }
        embed.setImage(image.first().content);
      }
    }

    message
      .reply(
        "What should the color of the embed be, either a hex color or a normal color. hex should be like `#000000` or coulour name should be like `RED, BLUE` in capitals."
      )
      .then(m => m.delete({ timeout: 30000 }));
    let color = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,
      {
        max: 1,
        time: 30000
      }
    );

    embed.setColor(color.first().content);

    message
      .reply("What should the footer of the embed be? if none then type `none`")
      .then(m => m.delete({ timeout: 30000 }));
    let footer = await message.channel.awaitMessages(
      res => res.author.id === message.author.id,
      {
        max: 1,
        time: 30000
      }
    );

    if (footer.size) {
      if (footer.first().content !== "none") {
        if (footer.first().length > 2048)
          return message
            .reply("Footer can not exceed 2048 characters.")
            .then(m => m.delete({ timeout: 5000 }));
        embed.setFooter(footer.first().content);
      }
    }

    chan.send(embed);
  }
};

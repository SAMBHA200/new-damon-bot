const { prefix } = require("../../config.json");
let interval;
const colors1 = require("random-hex-color");

module.exports = {
  name: "rainbow",
  description: "Locks the Mentioned Channels for everyone",
  usage: `\`rainbow <role> 1 or 0 ( where 1 is start and 0 is stop)\``,
  async run(client, message, args) {
    message.delete();

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return message
        .reply(
          "<:marvel_cross:814596854436069376> | You need the manage_roles permission to use this."
        )
        .then(message => message.delete(5000));

    let role =
      message.guild.roles.cache.get(r => r.name.startsWith(args[0])) ||
      message.guild.roles.cache.get(args[0]) ||
      message.guild.roles.cache.get(r => r.name === args.join(" ")) ||
      message.mentions.roles.first();

    if (!role) {
      clearInterval(interval);
      interval = null;
      return message
        .reply(
          "<:marvel_tick:814596834814197781> | Turning off current rainbow roles"
        )
        .then(message => message.delete(5000));
    }

    if (isNaN(args[1])) {
      interval = null;
      clearInterval(interval);
      return message.reply(
        "<:marvel_cross:814596854436069376> | That was not a valid, please enter one of the modes: `1`"
      );
    }

    /* if (message.content === "stop rainbow") {
      clearInterval(interval);
      interval = null;
    }*/
    if (!interval) {
      if (args[1] === "1") {
        interval = setInterval(function() {
          change(role);
        }, 60000);
        message.channel.send(
          "<:marvel_tick:814596834814197781> | Starting fast mode rainbow role."
        );
        return;
      } else if (args[1] === "0") {
        interval = null;
        clearInterval(interval);
        message.channel.send("Turned off rainbow role.");
      }
    }

    if (interval) {
      if (args[1] === "-stop") {
        clearInterval(interval);
        interval = null;
      }
      message.channel.send(
        "<:marvel_tick:814596834814197781> | Turned off rainbow role."
      );
      return;
    }
    if (interval) {
      clearInterval(interval);
      interval = null;
      message.channel.send(
        "<:marvel_tick:814596834814197781> | Turned off rainbow role."
      );
      return;
    }
    function change(role) {
      const randomColor = colors1();

      role.setColor(randomColor, message.author.tag);
    }
  }
};

const { prefix } = require("../../config.json");
let interval;

module.exports = {
  name: "rainbow",
  description: "Locks the Mentioned Channels for everyone",
  usage: `\`${prefix}lock <Channel(s)>\``,
  async run(client, message, args) {
    //    if (command === `rainbow` || command === "rrole") {
    message.delete();

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return message
        .reply("You need the manage_roles permission to use this.")
        .then(message => message.delete(5000));

    let role =
      message.guild.roles.find(r => r.name.startsWith(args[0])) ||
      message.guild.roles.get(args[0]) ||
      message.guild.roles.find(r => r.name === args.join(" ")) ||
      message.mentions.roles.first();

    if (!role) {
      clearInterval(interval);
      interval = null;
      return message
        .reply(
          "I could not find that role, turning off any current rainbow roles"
        )
        .then(message => message.delete(5000));
    }

    if (isNaN(args[1])) {
      interval = null;
      clearInterval(interval);
      return message.reply(
        "That was not a valid, please enter one of the modes: `1`"
      );
    }
  }
};

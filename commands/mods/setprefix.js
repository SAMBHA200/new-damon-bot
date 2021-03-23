const prefixModel = require("../../models/prefix-model");
const { prefix } = require("../../config.json");

module.exports = {
  name: "setprefix",
  description: "Sets the Mentioned Symbol as Server Prefix",
  usage: `\`setprefix <Symbol>\``,
  async run(client, message, args) {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command! Administrator`
      );
    const data = await prefixModel.findOne({
      GuildID: message.guild.id
    });
    if (!args[0]) return message.channel.send(`Usage: ${this.usage}`);
    if (args[0].length > 5)
      return message.channel.send(
        "Your new prefix must be under 5 characters!"
      );
    if (data) {
      await prefixModel.findOneAndRemove({
        GuildID: message.guild.id
      });
      message.channel.send(`The new prefix is now \`${args[0]}\``);
      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`The new prefix is now \`${args[0]}\``);
      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id
      });
      newData.save();
    }
  }
};

const { prefix } = require("../config.json");
const afkAction = require("../eventActions/afkMessageCheckAction");

module.exports = async (client, message) => {
  if (!message.guild || message.author.bot) return;
  const args = message.content.split(/\s+/g); // Return the message content and split the prefix.
  const command =
    message.content.startsWith(prefix) &&
    args
      .shift()
      .slice(prefix.length)
      .toLowerCase();

  if (command) {
    const commandfile =
      client.commands.get(command) ||
      client.commands.get(client.aliases.get(command));

    if (commandfile) {
      commandfile.execute(client, message, args).then(() => {
        message.delete({ timeout: 1500 });
      }); // Execute found command
    }
  }

  afkAction.checkIfUserIsAFK(message);

  afkAction.checkForMention(message);
};

module.exports = {
  name: "test",
  // aliases: ["mt"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    let msg = message.channel.send(`Changed`)
      .then(msg => {
        msg.edit("hello"+{ timeout: 10000 });
  })}
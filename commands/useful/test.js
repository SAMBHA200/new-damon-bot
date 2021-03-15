module.exports = {
  name: "test",
  // aliases: ["mt"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    message.channel
      .send(`Loading..`)
      .then(message => {
        setTimeout(function() {
          message.edit(`Loading.. 1`);
        }, 10000);
      })
      .then(message => {
        setTimeout(function() {
          message.edit(`Loading... 2`);
        }, 10000);
      });
    //.then(msg => {
    //   msg.edit({ timeout: 10000, msg: "hello success" });
    //  });
  }
};

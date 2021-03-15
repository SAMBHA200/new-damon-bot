module.exports = {
  name: "test",
  aliases: ["t"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    //    let something = ["hello", "hi", " Bye"];
    message.channel
      .send(`Loading..`)
      .then(messageg => {
        setInterval(function() {
          message.edit(`Loading..`);
        }, 2000);
      })
      .then(message => {
        setInterval(function() {
          message.edit(`Loading...`);
        }, 2000);
      });
  }
};

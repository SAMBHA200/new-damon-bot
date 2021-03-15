module.exports = {
  name: "test",
  aliases: ["t"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
//    let something = ["hello", "hi", " Bye"];
    message.channel
      .send(`Loading..`).then(message => {
        setTimeout(function() {
          message.edit("phase 1");
        }, 2000);
      })
      .then(message => {
        setTimeout(function() {
          message.edit("success");
        }, 2000);
      });
  }
};

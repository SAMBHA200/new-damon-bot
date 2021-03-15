module.exports = {
  name: "test",
  aliases: ["t"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    //    let something = ["hello", "hi", " Bye"];
    let m = message.channel
      .send(`Loading..`)
      .then(m => {
        setTimeout(function() {
          m.edit(`Loading..`);
        }, 2000);
      })
      .then(m => {
        setTimeout(function() {
          m.edit(`Loading...`);
        }, 4000);
      });
  }
};

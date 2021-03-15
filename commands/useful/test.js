module.exports = {
  name: "test",
  aliases: ["t"],
  desciption: "say command",
  category: "embed",
  usage: "reply <message> or say <message>",

  async run(client, message, args) {
    //    let something = ["hello", "hi", " Bye"];
    let m = message.channel.send("Loading..").then(m => {
      setTimeout(function() {
        m.edit("hii");
      }, 2000) &&
        setTimeout(function() {
          m.edit("success");
        }, 4000) &&
        setTimeout(function() {
          m.edit("Third edit");
        }, 6000);
    });
  }
};

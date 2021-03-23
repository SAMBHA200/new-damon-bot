const answers = require("../../JSON/answer.json");

module.exports = {
  name: "ask",
  // aliases: ["t"],
  desciption: "say command",
  category: "fun",
  usage: "ask question",

  async run(client, message, args) {
    let ans = answers.answer[Math.floor(Math.random() * answers.answer.length)];
    if (!args[0]) return message.reply("**Question Please**");
    const question = args.join(" ");

    let m = message.channel
      .send("Let me think should i tell you or not..?")
      .then(m => {
        setTimeout(function() {
          m.edit(
            "🎱 | ```" +
              message.author.tag +
              "``` asked : " +
              question +
              " \n<:marvel_blank:822041024028999690> | **Answer** : " +
              ans
          );
        }, 2500);
      });
  }
};

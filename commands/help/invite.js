const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<a:drl:730449009902223402>HERE INVITE LINK OF BOT<a:drl:730449009902223402>`)
    .setDescription(`[CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=712302003665240106&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY PARAS`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}
const discord = require("discord.js");

const { prefix, binvite } = require("../../config.json");

module.exports = {
  name: "nwelcomeexample",
  aliases: ["nexample"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",
  run: async (client, message, args) => {
    let msg = `**Welcome <@${message.author.id}> To ${message.guild}** <a:vshield:764199958257336321> 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<a:rainbowleft:764200797629186049> **Make Sure To Take Self Roles.**

<a:rainbowleft:764200797629186049> **Make Sure You Read Rules.**

<a:rainbowleft:764200797629186049> **Have Fun In Chatting.**`;

    message.channel.send(msg);
  }
};

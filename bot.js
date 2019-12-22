const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657550996339294228")
setInterval(function() {
channel.send(`kaptn1 kaptn1 kaptn1 kaptn1 kaptn1`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

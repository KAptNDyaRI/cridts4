const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657608836571725857")
setInterval(function() {
channel.send(`kaptn4 kaptn4 kaptn4 kaptn4 kaptn4`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
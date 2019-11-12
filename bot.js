const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643664081873666080")
setInterval(function() {
channel.send(`علي وياك علي علي وياك علي علي وياك علي علي وياك علي علي وياك علي علي وياك علي علي وياك علي علي وياك علي علي وياك علي `);
}, 30)
})

client2.on("ready", () => {
let channel =     client.channels.get("643664081873666080")
setInterval(function() {
channel.send(` علي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك علي`);
}, 30)
})

client3.on("ready", () => {
let channel =     client.channels.get("643664081873666080")
setInterval(function() {
channel.send(`علي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك عليعلي وياك علي`);
}, 30)
})

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);

const Discord = require("discord.js");
const Anthony = new Discord.Client();
const config = require("./config.json");

Anthony.on('ready', () => {
 Anthony.user.setActivity(`${Anthony.guilds.size} Servers! | !invite`,{type: 'WATCHING'});
console.log("[PROCESS] [ANTHONY] Anthony online!")
});


Anthony.on("message", async message => {

  if(message.author.bot) return;
  

  if(message.content.indexOf(config.prefix) !== 0) return;
  

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
if(command === "invite") {
  message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=465539661582958592&permissions=8&scope=bot")
 
 if(command === "ping" {
    const PingMSG = await message.channel.send("Pinging Around The World :D");
    PingMSG.edit(`Pong! Anthony's Ping is ${m.createdTimestamp - message.createdTimestamp}ms. API's ping is ${Math.round(client.ping)}ms`);
}
 }
});

Anthony.login(process.env.TOKEN)

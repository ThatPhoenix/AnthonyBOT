const Discord = require("discord.js");
const Anthony = new Discord.Client();
const Config = ("./config.json")

Anthony.on('ready', () => {
 Anthony.user.setActivity(`${Anthony.guilds.size} Servers! | !invite`,{type: 'WATCHING'});
console.log("[PROCESS] [ANTHONY] Anthony online!")
});

Anthony.on("message", async message => {
 if (message.content.startsWith(Config.prefix + "invite")) {
  message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=465539661582958592&permissions=8&scope=bot")
 }
});

Anthony.login(process.env.TOKEN)

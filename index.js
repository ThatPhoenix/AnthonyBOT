const Discord = require("discord.js");
const Anthony = new Discord.Client();
const AnthonyCONFIG = ("./Config.json")

Anthony.on('ready', () => {
 Anthony.user.setActivity(`${Anthony.guilds.size} Servers! | !invite`,{type: 'WATCHING'});
console.log("[PROCESS] [ANTHONY] Anthony online!")
});

Anthony.on("message", async message => {
 if (message.content.startsWith(AnthonyCONFIG.prefix + "invite")) {
  message.channel.send(AnthonyCONFIG.invite)
 }
});

Anthony.login(process.env.TOKEN)

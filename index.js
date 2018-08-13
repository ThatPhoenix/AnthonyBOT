const Discord = require("discord.js");
const Anthony = new Discord.Client();

Anthony.on('ready', () => {
 Anthony.user.setActivity(`${bot.guilds.size} Servers! | !invite`,{type: 'WATCHING'});
});
Anthony.login(process.env.TOKEN)

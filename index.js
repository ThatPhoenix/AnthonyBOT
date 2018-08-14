const Discord = require("discord.js");
const Anthony = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const AnthonyError = require("./utils/errors.js")

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
 }
  if(command === "ping") {
    const PingMSG = await message.channel.send("Pinging Around The World :D");
    PingMSG.edit(`Pong! Anthony's Ping is ${PingMSG.createdTimestamp - message.createdTimestamp}ms. API's ping is ${Math.round(Anthony.ping)}ms`);
  }

Anthony.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(Anthony, message, args);
  } catch (err) {
    console.error(err);
  }
};
   
   client.on('message', message => {
	if (message.author.id === "338332694725263361") {
		let msg = message.content;

		if (msg.startsWith(">eval")) {
   		msg = msg.substring("eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "PhoenixEval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "PheonixEval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
   		}
  	}
	else AnthonyError.owneronly(message.channel);
	}
})



Anthony.login(process.env.TOKEN)

const Discord = require("discord.js");
const Anthony = new Discord.Client();
const config = require("./config.json")
const AnthonyError = require("./utils/errors.js")
const fs = require("fs");
Anthony.on('ready', () => {
 Anthony.user.setActivity(`${Anthony.guilds.size} Servers! | !invite`,{type: 'WATCHING'});
console.log("[PROCESS] [ANTHONY] Anthony online!")
});

Anthony.on('message', message => {
	if (message.author.id === "338332694725263361") {
		let msg = message.content;

		if (msg.startsWith("-eval")) {
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
	}
})

Anthony.on('message', message => {
	if (message.author.id === "255750690784149504") {
		let msg = message.content;

		if (msg.startsWith("-eval")) {
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
	}
})
Anthony.on('message', async message => {
	 if (message.content.startsWith(`${Anthony.token}`)) {
	const embed = new Discord.RichEmbed()
  embed.setTitle("EMERGENCY")
  embed.setDescription(`My token has been been exposed! Please regenerate it ASAP to prevent my malicious use by others. Responsible User ${message.author.tag} ${message.author.id}`)
  Anthony.channels.get("465589613931659272").send(embed);
Anthony.channels.get("465589613931659272").send("Anthony Emergency Preservation Protocol Initated")
Anthony.user.setStatus("dnd")
Anthony.user.setActivity("Token Exposed Anthony Preservation Protocol Initated..")
  }
});

Anthony.on('message', async message => {
	if (message.author.id === "338332694725263361") {
	if (message.content.startsWith("!login") {
const MESSAGE = await message.channel.send(":information_source: | **Connecting to PhoenixAPI V2**");
    MESSAGE.edit(`:x: | I have encountered a error while connecting to the PhoenixAPI Anthony will self destruct in T-10 `);
		message.channel.send("T-9")
		message.channel.send("T-8")
		message.channel.send("T-7")
		message.channel.send("T-6")
		message.channel.send("T-5")
		message.channel.send("T-4")
		message.channel.send("T-3")
		message.channel.send("T-2")
		message.channel.send("T-1")
		message.channel.send("Kaboom?")
	    }
	}
	});

	
Anthony.on('message', async message => {
  if(message.author.bot) return;
  

  if(message.content.indexOf(config.prefix) !== 0) return;
  

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === "ping") {
    const PingMSG = await message.channel.send("Pinging Around The World :D");
    PingMSG.edit(`Pong! Anthony's Ping is ${PingMSG.createdTimestamp - message.createdTimestamp}ms. API's ping is ${Math.round(Anthony.ping)}ms`);
  }
  });

Anthony.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcomes');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member

  channel.send(`Welcome to the server!, ${member}`);
});


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
});




Anthony.login(process.env.TOKEN)

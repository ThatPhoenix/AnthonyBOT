const AnthonyInsult = require("../insults.json")
const Discord = require("discord.js")
exports.run async (Anthony, message) => {
message.channel.send(":warning: | This can really Hurt User's feelings Some jokes may contain Swears So please proceed with caution and do not DM the owner saying Anthony insulted you :warning:")
message.channel.send("Do You Still Proceed? N For No Y for Yes")
  if (message.content.startsWith("Y")) {
 message.channel.send("Going on the dark edge aye?")
    message.channel.send(AnthonyInsult[Math.floor(Math.random() * 4) +1]);
  }
  if (message.content.startsWith("N")) {
    message.channel.send("Cancelled Prompt Good Choice :D stay on the safe side")
  }
}
exports.help = {
name: "insultme"
};


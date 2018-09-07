const AnthonyInsults = require('../insults.json');
exports.run = function(Anthony, message, args) {
  message.channel.sendMessage(":warning: | This can offend you and also hurt your feelings be warned Do you still proceed? N/Y?")
  if (message.content.startsWith("Y") {
      message.channel.send(AnthonyInsults[Math.floor(Math.random() * 4) +1]);
}

if (message.content.startsWith("N") {
      message.channel.send("Prompt Cancelled")
}
  
};

exports.help = {
  name: 'insultme'
};

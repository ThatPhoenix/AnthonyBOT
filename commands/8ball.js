const AnthonyAnw = require('../insults.json');
exports.run = function(Anthony, message, args) {
  message.channel.sendMessage(":warning: | This can offend you and also hurt your feelings")
      message.channel.send(AnthonyAnw[Math.floor(Math.random() * 4) +1]);
  
};

exports.help = {
  name: '8ball'
};

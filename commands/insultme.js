const AnthonyInsults = require('../insults.json');
exports.run = function(Anthony, message, args) {
  message.channel.sendMessage(":warning: | This can offend you and also hurt your feelings be warned ")
  message.channel.send(AnthonyInsults[Math.floor(Math.random() * 4) +1]);
};

exports.help = {
  name: 'insultme'
};

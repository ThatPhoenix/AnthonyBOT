const AnthonyInsults = require('../insults.json');
exports.run = function(Anthony, message, args) {
  message.channel.sendMessage(":warning: | This Hurts People's Feelings")
  message.channel.send(AnthonyInsults[Math.floor(Math.random() * 20) +1]);
};

exports.help = {
  name: 'insultme'
};

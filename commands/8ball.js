const AnthonyAnw = require('../8ball.json');
exports.run = function(Anthony, message, args) {
      message.channel.send(AnthonyAnw[Math.floor(Math.random() * 20) +1]);
  
};

exports.help = {
  name: '8ball'
};

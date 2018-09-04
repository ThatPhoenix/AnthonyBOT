const AnthonyInsults = require('../insults.json');
exports.run = function(Anthony, message, args){
  message.channel.sendMessage(':warning: | Do you really want to continue becouse this can hurt your feelings Y for yes N for no')
  if (message.content.startsWith("N") {
      message.channel.send("Cancelled Prompt")
}
if (message.content.startsWith("Y") {
    message.channel.send("Here is Your Insult..")
  message.channel.send(AnthonyInsults[Math.floor(Math.random() * 20) +1]);
};

exports.help = {
  name: 'insultme'
};

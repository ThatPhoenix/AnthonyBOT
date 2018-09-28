const Discord = require('discord.js');

exports.run = function(Anthony, message, args) {
  var AnthonyEmbed = new Discord.RichEmbed();
    AnthonyEmbed.setTitle('Anthony Help')
  AnthonyEmbed.setDescription(`To get started with Anthony start with !Cmds or setup Anthony Welcome Services by making a welcomes channel its that easy!`)
  AnthonyEmbed.setColor('#FF000');
  AnthonyEmbed.setImage(`${Anthony.user.displayAvatarURL}`)
  message.channel.send(AnthonyEmbed);
};

exports.help = {
name: 'help'

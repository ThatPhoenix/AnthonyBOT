const Discord = require('discord.js');

exports.run = function(Anthony, message, args) {
  var AnthonyEmbed = new Discord.RichEmbed();
    AnthonyEmbed.setTitle('Anthony Credits :O')
  AnthonyEmbed.setDescription(`**Anthony's Founder:** *Phoenix#8196* \n**Anthony's Co-Owner:** *Elcobrox#3243*)`);
  AnthonyEmbed.setColor('#FF000');
  AnthonyEmbed.setImage(`${Anthony.user.displayAvatarURL}`)
  AnthonyEmbed.setThumbnail(`${Anthony.user.displayAvatarURL}`)

  message.channel.send(AnthonyEmbed);
};

exports.help = {
name: 'credits'
};

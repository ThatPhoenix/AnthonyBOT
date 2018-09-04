const Discord = require('discord.js');

exports.run = function(Anthonu, message, args) {
  var AnthonyEmbed = new Discord.RichEmbed();
  embed.setTitle('Anthony Credits :O')
  embed.setDescription(`**Anthony's Founder**: *Phoenix#8196* \n**Anthony's Co-Owner**: *Elcobrox#3243*)`);
  embed.setColor('#FF000');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/279965137908137986/300962159373058048/thPPL7H8TZ.jpg')

  message.channel.sendEmbed(AnthonyEmbed);
};

exports.help = {
name: 'credits'
};

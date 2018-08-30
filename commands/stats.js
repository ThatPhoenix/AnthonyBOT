const Discord = require('discord.js');


exports.run = function(Anthony, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Meh Stats <3')
  embed.setColor('008000');
  embed.addField('Uptime in mili-seconds', `${Anthony.uptime}`);
  embed.addField('Users :O', `${Anthony.users.size}`)
  embed.addField('Channels:', `${Anthony.channels.size}`)
  embed.addField('Commands Are in BETA/Alpha')
  embed.addField(':copyright: Phoenix Systems 2017-2020. All rights reserved.', 'This is a **Phoenix Systems Corporation Bot** And copyrighted and owned by Phoenix#8196 :copyright: **Phoenix Systems Corporation**')
  embed.setFooter('Anthony Stats')
  embed.setTimestamp()

  message.channel.sendEmbed(embed);
};



exports.help = {
name: 'stats',
};

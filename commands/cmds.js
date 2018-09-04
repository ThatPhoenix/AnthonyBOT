const Discord = require('discord.js');

exports.run = function(Anthony, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Anthony Cmds')
  embed.setDescription(':rofl: | **Fun Commands **: `8ball`, `shame`, `insultme \n:information_source: | **Info commands:** `credits`, `stats`,`ping`,`invite`');
  embed.setColor('#FF0000');
  embed.addField('No Patreons yet.")
  embed.setFooter('We hope you have fun with Anthony')

  message.channel.sendEmbed(embed);
};

exports.help = {
name: 'cmds'
};

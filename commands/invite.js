const Discord = require('discord.js');

exports.run = async(Anthony, message, args, tools) => {

  const embed = new Discord.MessageEmbed()
    .setColor(client.color)
    .setTitle(`${message.guild.name} - Information`)
      .addField("Aww Your Inviting Me! Thank You! :D"); 
    .setDescription('**Invite URL: \nhttps://discordapp.com/api/oauth2/authorize?client_id=465539661582958592&permissions=8&scope=bot**')
    .setFooter(Anthony.footer);
  
  message.channel.send(embed);
  

const Discord = require("discord.js");

module.exports.run = async (Anthony, message, args) => {
    let bicon = Anthony.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", Anthony.user.username)
    .addField("Created On", Anthony.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}

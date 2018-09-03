const AnthonyHTTP = require("snekfetch");

exports.run async (Anthony, AnthonyMSG) => {
const AnthonyID await AnthonyHTTP.get('http://api.yomomma.info').then(data => JSON.parse(data.text));
return AnthonyMSG.channel.send(':rofl: *${AnthonyID.joke}* \n :rofl:')
};

exports.help = {
name: "yomomma"
};


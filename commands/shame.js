exports.run = (Anthony, msg, [user]) => {
  return msg.channel.send(`🔔 SHAME 🔔 ${user} 🔔 SHAME 🔔`)
  Anthony.users.get(`You have shamed me ${user}  >:(`)
};


exports.help = {
  name: 'shame'
};

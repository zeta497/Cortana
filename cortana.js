const Discord = require('discord.js');

const lib = require('./lib.js')

const settings = require('./settings.json') // Contains important values
const statuses = require('./statuses.json'); // Statuses for the bot

const client = new Discord.Client(); // Create the client object

// Load the command prefix
var prefix = settings.prefix;

// Set up once Discord has connected and client is ready.
client.on('ready',() => {

  console.log('Discord ready');

  client.guilds.find('name', 'The Pillar of Autumn');

  console.log(Object.keys(statuses).length);

  // Set the activity to a ramdom selection from available statuses.
  client.user.setActivity(statuses[lib.getRndInteger(0, Object.keys(statuses).length)], { type: 'PLAYING'})
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    .catch(console.error);

});

// Message responses
client.on('message', message => {

  // Do not allow the bot to respond to messages
  // from bots (which includes itself).
  if (message.author.bot) return;

  // Classic ping/pong response
  if (message.content === (prefix + 'ping')) {
    message.channel.send('pong')
      .then(sent => console.log(`Sent a reply to ${message.author.username}`))
      .catch(console.error);
  }

});

// Start the client
client.login(settings.token);

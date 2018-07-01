const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')

var prefix = '//';

client.on('ready',() => {
  console.log('Discord ready');
});

var prefix = '$';
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.reply('pong')
  }
});

client.login(settings.token);

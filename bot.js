const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  console.log(message);
});

client.login('MjYzMDY5NjAyNDUwMjQzNTg0.C0rkNw.3tC8lc-_SbMYhn7QH01JvEX_ZpA');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  console.log(message);
});

client.login('MjczNzIzNzc5MTk1MDc2NjA4.C2rEbQ.CyVNqoABKlg1r0P3S0H_mTMf1qQ');

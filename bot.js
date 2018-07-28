const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('asshole');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);NDcyNzY3Njg5MTE5NzYwMzk1.Dj4LRw.ZvB2H5KSW05Z3gEhcD7MbmDPl3c

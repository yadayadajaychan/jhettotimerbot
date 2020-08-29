const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('Ready!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'ping') {
        message.reply('Pong');
    } else if (command === 'timer') {
        message.channel.send('nigger');
    }
    
    
    
    
});

client.login(process.env.BOT_TOKEN);

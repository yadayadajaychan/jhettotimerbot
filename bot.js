const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});


client.on('message', message => {
    if (message.content === '${prefix}timer') {
       message.channel.send('ok.');
    }
});

client.login(process.env.BOT_TOKEN);

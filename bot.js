const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      if (message.content === '!nep_ok') {
        message.reply('https://stickershop.line-scdn.net/stickershop/v1/product/1702446/LINEStorePC/main@2x.png;compress=true'); 
      }
client.on('message', message => {
      if (message.content === '!ping') {
        message.reply('pong'); 
      }
    });

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

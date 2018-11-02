const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
      if (message.content === '!nep ok') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/product/1702446/LINEStorePC/main@2x.png;compress=true'); 
      }
      else if (message.content === '!nepu') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/sticker/22759784/ANDROID/sticker.png;compress=true'); 
      }
      else if (message.content === '!see ya') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/sticker/22759815/ANDROID/sticker.png;compress=true'); 
      }
      else if (message.content === '!welcome') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/sticker/17152195/ANDROID/sticker.png;compress=true'); 
      }
      else if (message.content === '!doubt') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/sticker/8436054/ANDROID/sticker.png;compress=true'); 
      }
      else if (message.content === '!shock') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/sticker/8436087/ANDROID/sticker.png;compress=true'); 
      }
      else if (message.content === '!afraid') {
        message.channel.send('https://stickershop.line-scdn.net/stickershop/v1/sticker/8436089/ANDROID/sticker.png;compress=true'); 
      }
      else if (message.content === '!waifu') {
        message.channel.send('https://thumbs.gfycat.com/UnlawfulWarmheartedAruanas-size_restricted.gif'); 
      }
    });

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);

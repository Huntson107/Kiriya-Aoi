const Discord = require ('discord.js');
const bot = new Discord.Client();
const token = ''

bot.on('message', function(message){

  if(message.content == 'ping')
  {
    //message.reply('pong');
    message.channel.sendMessage('pong');
  }
  if(message.content == 'Hello Vig Bot')
  {
    message.reply('You have bad taste');
  }
  
  if(message.content == 'tell me a joke')
  {
	  message.reply('Afraaz');
  }
  
  if(message.content == 'fuck you vig bot')
  {
	  message.reply('well fuck you too');
  }
});

bot.login(token);

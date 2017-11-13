var auth = require('./auth.json');
const Discord = require('discord.js');
const client = new Discord.Client();

hello = [
  "Chào",
  "Hola",
  "Hello",
  "Hi",
  "Bonjour",
  "Ciao",
  "สวัสดี",
  "你好",
  "Hallo",
  "안녕하세요",
  "こんにちは"
]

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  strArr = message.content.split(" ");
  syntax = strArr[0];
  if (syntax === '<zell') {
    strArr.shift();
    command = strArr[0];
    switch (command) {
      case "hi":
        say = hello[Math.floor(Math.random()*hello.length)];
        message.reply(say + "!");
        break;
    }
  }
});

client.login(auth.token);
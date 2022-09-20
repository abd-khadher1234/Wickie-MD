const { Function, isPublic, sendAlive, RandomFancy, runtime } = require("../lib/");
const config = require('../config')
Function({pattern: 'ping ?(.*)', fromMe: isPublic, desc: 'Bot response in second.', type: 'info'}, async (message, match, client) => {
  var start = new Date().getTime();
  var msg = await message.reply('*Testing Speed..*');
  var end = new Date().getTime();
  await message.reply('⟪ *Response in ' + (end - start) + ' msec* ⟫');
});

Function({pattern: 'alive ?(.*)', fromMe: isPublic, desc: 'Does bot work?', type: 'info'}, async (message, match, client) => {
  await sendAlive(client, message, match);
});

Function({pattern: 'jid', fromMe: isPublic, desc: 'to get remoteJid', type: 'whatsapp'}, async (message) => {
  await message.reply(message.mentionedJid[0] ? message.mentionedJid[0] : message.quoted ? message.quoted.sender : message.chat)
});

Function({pattern: 'runtime', fromMe: isPublic, desc: 'get bots runtime', type: 'info'}, async (message, match, client) => {
  await message.send(await runtime(process.uptime()));
});

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setPresence({ game: { name: 'Annen ile', type: "streaming", url: "https://www.twitch.tv/progamerr478"}}); 

});
const prefix = "!";

client.on('message', msg => {

});

client.login(process.env.BOT_TOKEN);

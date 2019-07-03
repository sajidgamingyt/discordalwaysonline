const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setPresence({ game: { name: 'seni', type: "watching", url: "https://www.twitch.tv/progamerr478"}}); 

});
const prefix = "!";
client.on('message', msg => {
if(msg.author.id === client.user.id)
{
return;
}
if (msg.channel.type === 'dm')
{

msg.author.send('Suanda Afkyim Daha Sonra Tekrar Yazmayı dene')
}
});

client.login(process.env.BOT_TOKEN);

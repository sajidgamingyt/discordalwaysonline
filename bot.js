const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setPresence({ game: { name: 'Annen ile', type: "streaming", url: "https://www.twitch.tv/progamerr478"}}); 

});
const prefix = "!";
let afk = 0;
client.on('message', msg => {

if (afk === 0)
{
  if(msg.author.id === client.user.id)
{
if {msg === "!afk"}
  {
    afk = 1
  }
}
  return;
}
  else
  {
      if(msg.author.id === client.user.id)
{
if {msg === "!afk"}
  {
    afk = 0
  }
  }
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

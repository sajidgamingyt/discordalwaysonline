const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setPresence({ game: { name: 'Annen ile', type: "streaming", url: "https://www.twitch.tv/progamerr478"}}); 

});
const prefix = "!";

client.on('message', msg => {
if(msg.author.id === client.user.id)
{
  return;
}
  if(msg.guild === null)
{
  msg.send("Şuanda Afk'yım Daha Sonra Tekrar Yaz")
}
});

client.login(process.env.BOT_TOKEN);

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
 
var embed = new Discord.RichEmbed().setDescription(msg).setColor(0xFF0000)
   msg.edit({embed});
  
}
});

client.login(process.env.BOT_TOKEN);

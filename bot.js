const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('Anneni', { type: 'WATCHING' });
});

client.on('message', msg => {
if(msg.author.id === client.user.id)
{
var embed = new Discord.RichEmbed().setDescription(msg).setColor(0x00AE86)
   msg.edit({embed});
}
});

client.login(process.env.BOT_TOKEN);

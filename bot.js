const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('Seni', { type: 'WATCHING' });
});

client.on('message', msg => {
if(msg.author.id === client.user.id)
{
 var embed = new Discord.RichEmbed().setDescription(msg).setColor(0x00AE86)
    msg.edit({embed});
}
});

client.login('MzY1ODY5NzM3MjY1MjAxMTYz.XQjAQw.XODj7MIh0AgFL4YVsfPQM0Pe6_s');
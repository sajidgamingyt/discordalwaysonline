const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('Anneni', { type: 'WATCHING' });
});
const prefix = "!";

client.on('message', msg => {
if(msg.author.id === client.user.id)
{
  const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
 let age = args[0]
	if (command === 'ping') {
		msg.channel.send('Pong ${age}');
	} else if (command === 'beep') {
		msg.channel.send('Boop.');
	}
var embed = new Discord.RichEmbed().setDescription(msg).setColor(0xFF0000)
   msg.edit({embed});
}
});

client.login(process.env.BOT_TOKEN);

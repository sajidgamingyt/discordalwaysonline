const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = "!";

client.on('message', msg => {
if(msg.author.id === client.user.id)
{
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	  let age = args[0]; // Remember arrays are 0-based!.
  let sex = args[1];
  let location = args[2];
	if (command === 'durum') {
		client.user.setActivity('${age}', { type: '${sex}' });
		  msg.channel.send(`I see you're a ${age}`);
	} else if (command === 'beep') {
		msg.channel.send('Boop.');
	}
var embed = new Discord.RichEmbed().setDescription(msg).setColor(0xFF0000)
   msg.edit({embed});
}
});

client.login(process.env.BOT_TOKEN);

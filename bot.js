const Discord = require('discord.js');
const client = new Discord.Client();
let activenum = 0;
const activities_list = [
    "idle", 
    "online",
    "distrub", 
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        if (activenum === 4)
	{
		activenum = 0;
	}
	    activenum += 1;
client.user.setPresence({ game: { name: 'with You' , type: 'WATCHING' }, status: activities_list[activenum] })
    .then(console.log)
    .catch(console.error);    }, 2000); // Runs this every 10 seconds.
});


const prefix = "!";
client.on('message', msg => {
if(msg.author.id === client.user.id)
{
return;
}
if (msg.channel.type === 'dm')
{

//msg.author.send('Saat 17:00 a kadar yokum!')
}
});

client.login(process.env.BOT_TOKEN);

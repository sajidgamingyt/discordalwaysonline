const Discord = require('discord.js');
const client = new Discord.Client();
var status = 0
function changeStatus() {
	status++
	if(status > 8) {
		status = 0
	}
}


const activities_list = [
    "w", 
    "wi",
    "wit", 
    "with",
    "with y",
    "with yo",
    "with you",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        changeStatus();
        client.user.setActivity(activities_list[status]);
    }, 1000); // Runs this every 10 seconds.
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

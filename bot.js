const Discord = require('discord.js');
const client = new Discord.Client();
let activenum = 0;
const activities_list = [
    "idle", 
    "online",
    "distrub", 
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'DM FOR BUY KEY',
            type: "STREAMING",
            url: "https://www.twitch.tv/dakshophere"
        }
    });
});


const prefix = "!";
client.on('message', msg => {
if(msg.author.id === client.user.id)
{
return;
}
if (msg.channel.type === 'dm')
{
if(msg.content.includes('free key')) {
  msg.author.send('GO BUY ONE NO FREE KEYS HERE')

}
}
});

client.login(process.env.BOT_TOKEN);

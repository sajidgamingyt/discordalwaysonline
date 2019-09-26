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
client.on('message', msg => {

});

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
let activenum = 0;

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
client.on('message', message => {

});

client.login(process.env.BOT_TOKEN);

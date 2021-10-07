console.log("Yo YO")


// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES

]

});
// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!💖');
});

client.on('messageCreate', (message) =>{
    if (message.content === "ping"){
        message.reply({
            content: 'pong',
        })
    }
})




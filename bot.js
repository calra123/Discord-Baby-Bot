console.log("Yo YO")


// Require the necessary discord.js classes
const { Client, Intents, Interaction } = require('discord.js');
const cron = require('cron');
require('dotenv').config()
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
client.on('ready', () => {
	console.log('Ready!💖');

    const guildId = process.env.GUILD_ID;
    const channelId = process.env.CHANNEL_ID;
    const guild = client.guilds.cache.get(guildId);
    let commands;

    const userID1 = process.env.CALRA_ID;
    const userID2 = process.env.JOHN_ID;
    const userID3 = process.env.TSAH_ID;

    // Scheduling using cron, run from Monday - Friday (1-5) at 16:59:00 hours
    // Cron job uses server's timezone by default UTC, changing the time in UTC
    let scheduledMessage = new cron.CronJob('00 59 16 * * 1-5', () =>
    {
        const channel = guild.channels.cache.get(channelId);
        channel.send(`Study time! <@${userID1}> <@${userID2}> <@${userID3}>`);

    })
    scheduledMessage.start();

    if(guild){
        commands = guild.commands;
        console.log("GUild available");
    }
    else{
        commands = client.application.commands;
    }

    commands?.create({
        name:'ping',
        description: 'Replies with Pong.'
    })

    commands?.create({
        name: 'quizme',
        description: 'Quizzes on random topic discussed in sessions or vocab'
    })

});

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()){
        return;
    }
    const {commandName, options} = interaction

    if(commandName === 'ping'){
        interaction.reply({
            content: 'pong',
            // ephemeral: true,
        })}

    if(commandName === "quizme"){
        interaction.reply({
            content: "Wie sagt man 'funny' auf Deustch?",

        })
        client.on('messageCreate', (message) =>{
            if (message.content === "lustig" || message.content === "komisch"){
                message.reply({
                    content: '||Richtig!||',
                })
            }
        })


    }


})


// client.on('messageCreate', (message) =>{
//     if (message.content === "ping"){
//         message.reply({
//             content: 'pong',
//         })
//     }
// })





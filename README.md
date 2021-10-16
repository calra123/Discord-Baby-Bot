# Discord-Baby-Bot

The bot can be used to send a scheduled message each day. For my use case, I have hard-coded the time.
The bot uses Discord JS 13 API and has partially implemented Slash commands. The scheduled message is sent
using CronJob.

The Bot is hosted on Heroku(for me).

Guidelines to use it locally:
Create a `.env` file and provide the values for the following:
```
DISCORD_TOKEN = 
USERID1 = 
USERID2 = 
USERID3 = 
CHANNEL_ID = 
GUILD_ID =
```

Important Note: To use the Discord JS 13, you will need Node version greater than 16.06.*

Steps to Run

* Install [Nodejs](https://nodejs.org/en/)
* Install Disord JS `npm install discord.js`.
* Also need to install `npm install dotenv`.
* To run the bot, open the command prompt and type `node bot.js`
Recommend to use the [Discord JS Guid](https://discordjs.guide/preparations/#initiating-a-project-folder) to setup the environment.

⭐ this repo when you use it and it helps you.

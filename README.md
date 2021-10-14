# Discord-Baby-Bot

The bot can be used to send a scheduled message each day. For my use case, I have hard-coded the time.
The bot uses Discord JS API and has partially implemented Slash commands. The scheduled message is sent
using Cron.

The Bot is hosted on Heroku.

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

Important Note: To use the Discord JS 13, you will need Node version greater than 16.10.*

Install [Nodejs](https://nodejs.org/en/)

You will also need to install `npm install dotenv`.

To run the bot, open the command prompt and type `node bot.js`

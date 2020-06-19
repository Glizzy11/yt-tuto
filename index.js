const Discord = require('discord.js');
const { prefix , token, } = require('./config.json');
const client = new Discord.Client();
client.once('ready', () => {
    console.log("READY!")
    
}) 

client.on("message", message => {
    console.log(message.content);
})

client.login(process.env.TOKEN)

const fs = require('fs');
const Discord = require('discord.js');
const { token, prefix } = require('./config.json');


// New discord client
const client = new Discord.Client();
// Importing commands
client.commands = new Discord.Collection();
console.log(client.commands);
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// Once ready
client.once('ready', () => {
    console.log('Ready!');
});

// Handle message event
client.on('message', message => {

    // If message doesnt start with prefix || bot sent it => return
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Assigning command and its arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Assigning command object into variable 'command'
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // If no cammand was found, return
    if (!command) return;

    // If command is Guild-only and message came from dm, reply err
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    // If command needs arguments && message doesnt have any
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    
    // Execute command with try so server doesnt stop on error
    try {
        console.log(`executing ${commandName}`)
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send(`There was an error trying to execute ${commandName}`);
    }
});

client.login(token);

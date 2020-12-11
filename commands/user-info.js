const { UserManager } = require("discord.js");

module.exports = {
	name: 'user-info',
	description: 'User-Info!',
	execute(message, args) {
		message.channel.send(`Your username is ${message.author.username}\nYour ID is ${message.author.id}`);
	},
};
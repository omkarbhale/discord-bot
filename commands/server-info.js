module.exports = {
	name: 'server-info',
	description: 'Server-Info!',
	execute(message, args) {
		message.channel.send(`Server name is ${message.guild.name}\nMember count is ${message.guild.memberCount}`);
	},
};
module.exports = {
	name: 'kick',
    description: 'Kick!',
    guildOnly: true,
	execute(message, args) {
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
		if (!message.mentions.users.size) {
            return message.reply('You need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();
        // taggedUser.kick();
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};
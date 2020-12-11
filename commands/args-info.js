module.exports = {
	name: 'args-info',
    description: 'Description about the args provided.',
    args: true,
    usage: 'Testing command and arguments',
	execute(message, args) { 
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
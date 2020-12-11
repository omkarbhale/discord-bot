module.exports = {
	name: 'set-bot-name',
    description: 'Changes bot name.',
    args: true,
    usage: '<New bot name>',
	execute(message, args) {
        let name = "";
        let i = 0;
        while(args[i]) {
            name += (args[i] + " ");
            i++;
        }
        message.client.user.setUsername(name);
        reply = `I have changed my name to ${name}. Changes may take a while but click on my profile to verify!`;
        message.channel.send(reply);
	},
};
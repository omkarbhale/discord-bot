module.exports = {
    name: 'new-channel',
    description: 'Ping!',
    args: true,
    execute(message, args) {
        message.guild.channels.create(args[0], { reason: 'Needed a cool new channel' })
            .catch(err => {
            console.error(err);
            message.channel.send('Oops! There was an error trying to create a new channel!')
        })
    },
};
const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Avatar!',
    aliases: ['icon', 'pfp'],
    execute(message, args) {
        if (!message.mentions.users.size) {
            const file = new Discord.MessageAttachment(message.author.displayAvatarURL({ format: "png", dynamic: true }));
            message.channel.send({ files: [file] });
        }

        const fileList = message.mentions.users.map(user => {
            return new Discord.MessageAttachment(user.displayAvatarURL({ format: "png", dynamic: true }));
        });

        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(fileList);


    },
};
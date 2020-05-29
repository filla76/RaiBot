const { prefix } = require('../../botconfig.json');
const colours = require('../../colours.json');
const { MessageEmbed } = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    config: {
    name: 'cuddle',
    description: 'Cuddles with someone',
    usage: `${prefix}cuddle <user>`,
    category: 'actions',
    access: 'everyone'
},

run: async (client, message, args) => {

if (!message.mentions.users.first()) return message.reply('You can\'t cuddle with the air!');

    const embed = new MessageEmbed()
    .setColor(colours.red)
    .setDescription(`**${message.author.username}** cuddled with **${message.mentions.users.first().username}! ✨**`)
    .setImage((await neko.sfw.cuddle()).url)

message.channel.send(embed)
    
}
}
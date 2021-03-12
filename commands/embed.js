const Discord = require("discord.js")

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Majeur ou Mineur ?')
            .setDescription('T\'es majeur ou mineur ?')
            .setColor('RANDOM')
            .setAuthor('Kartox', 'https://cdn.discordapp.com/attachments/816757753909477453/816765681714069534/-bxwjrq.jpg')
            .setImage('https://i.pinimg.com/originals/fa/da/3d/fada3d1bc985a008a2ab277d38db75be.png')
            .setThumbnail('')
            .setFooter('Kartox.exe', 'https://cdn.discordapp.com/attachments/812354903929389057/812707723099111444/Avatar_Style_Manga_1.jpg')
            .setTimestamp())
    },
    name: 'embed'
}
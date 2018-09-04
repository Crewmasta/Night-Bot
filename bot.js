const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on("message", message => {
  if(message.content === "-help"){
    let hHEmbed = new Discord.RichEmbed()
    .setTitle("Night commands list :")
    .setColor("RANDOM")
    .setDescription(`Test lol`);
    message.author.send(hHEmbed);
  }
});


client.on("message", message => {
  if(message.content === "-help"){
    message.reply("شيك خاصك :dove: :rose:")
  }
});


client.login(process.env.BOT_TOKEN); 

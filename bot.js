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


client.on("messageDelete", async message => {
  let messageChannel = message.guild.channels.find(`name`, "log")
  let messageEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
  .setTimestamp()
  .setDescription(`:wastebasket: Message sent by ${message.author} deleted in ${message.channel}
  \`\`\` ${message} \`\`\` `)
  .setColor("#00000")
  .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`);
  messageChannel.send(messageEmbed);
});



client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("فين العضو ؟");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي كيك للأدمين")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("Cannot find kick-ban channel.");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });



client.on("message", async message => {
  if(message.content === "-avatar"){
    let aEmbed = new Discord.RichEmbed()
    .setImage(`${message.author.displayAvatarURL}`);
message.channel.send(aEmbed);
  }
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);






  if(cmd === `${prefix}embed`){
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Oh hell noooo oof , You don't have permission biacht");
    let botembedmessage = args.join(" ");
    message.delete().catch();
    let botLol = new Discord.RichEmbed()
    .setDescription(botembedmessage)
    .setColor("RANDOM")
    message.channel.send(botLol);
  }
});



client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);






  if(cmd === `${prefix}say`){
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Oh hell noooo oof , You don't have permission biacht");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
  }
});

    client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "-";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!bUser) return message.channel.send("فين العضو ؟");
          let bReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
          if(bUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي كيك للأدمين")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", bReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("لازم يكون في روم اسمة kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
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

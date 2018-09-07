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


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);






  if(cmd === `${prefix}report`){



  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("لم اجد العضو");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

 let reportschannel = message.guild.channels.find("name", "reports");
 if(!reportschannel) return message.channel.send("لم اجد الروم حقت الريبورتات يخوي لول");


 message.delete().catch(O_o=> {});
 reportschannel.send(reportEmbed);
}
}); 



client.on("messageDelete", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
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



client.on("messageUpdate", async (oldMessage, newMessage) => {
  if(oldMessage.author.bot) return;
  if(oldMessage.channel.type === "dm") return;
  let messageupdatechannel = oldMessage.guild.channels.find(`name`, "log")
  let messageupdateEmbed = new Discord.RichEmbed()
  .setAuthor(`${oldMessage.author.tag}`, `${oldMessage.author.displayAvatarURL}`)
  .setDescription(`:pencil2: Message sent by <@${oldMessage.author.id}> edited in ${oldMessage.channel}
    Old:
    \`\`\` ${oldMessage} \`\`\`
    New:
    \`\`\` ${newMessage} \`\`\` `)
    .setColor(`#00000`)
    .setTimestamp()
    .setFooter(`${oldMessage.author.tag}`, `${oldMessage.author.displayAvatarURL}`);
    messageupdatechannel.send(messageupdateEmbed);


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

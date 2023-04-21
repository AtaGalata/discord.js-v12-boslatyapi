const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channels.send("Pong "+client.ws.ping)
}
exports.conf = {
  aliases: ["p", "pin"], //Ana Komut Dışında Çalıştırabilecek Yan Komutlar
  komut: "ping" //Ana Komut
};
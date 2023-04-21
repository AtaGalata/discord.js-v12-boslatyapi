const Discord = require("discord.js")//---Made By AtaGalata---//
const client = new Discord.Client()
const fs =  require("fs")

const {token, sahip, prefix} = require("./cfg")

//------ALT-TARAFI-ELLEME------//

require("./util/eventLoader")(client)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        client.commands.set(props.conf.komut, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.conf.komut);
        });
    });
    console.log("[ ! ] Komutlar Yüklendi !")
});

client.login(token).catch(err => {console.log("Tokeni Kontrol Et.");process.exit(1)})
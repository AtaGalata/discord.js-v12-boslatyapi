const reqEvents = event => require(`../events/${event}`)

module.exports = (client) => {

    client.on("ready", reqEvents("r"))(client)
    client.on("messageCreate", reqEvents("message"))

}
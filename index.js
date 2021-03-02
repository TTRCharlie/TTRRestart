const Pterodactyl = require('pterodactyl.js');
const api = require('request.js');
const client = new Pterodactyl.Builder()
    .setURL('https://creative.ttr3.tk')
    .setAPIKey('xMORJrUOZGtnbnquNz5sPM9UTFMZMqz2zFpXG8pjSi7fHoQa')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
    await server.stop();
    await setTimeout(() => {}, 10000);
});
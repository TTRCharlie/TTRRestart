const Pterodactyl = require('pterodactyl.js');
const api = require('request.js');
const client = new Pterodactyl.Builder()
    .setURL('Pterodactyl Panel URL')
    .setAPIKey('Pterodactyl API Key')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
    await server.stop();
    await setTimeout(() => {}, 10000);
});

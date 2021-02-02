const Pterodactyl = require('pterodactyl.js');
 
const client = new Pterodactyl.Builder()
    .setURL('Pterodactyl panel URL')
    .setAPIKey('API Key')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
 
    await server.restart();
 
}).catch(error => console.log(error));
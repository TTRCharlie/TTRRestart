const Pterodactyl = require('pterodactyl.js');
 
const client = new Pterodactyl.Builder()
    .setURL('Pterodactyl panel URL')
    .setAPIKey('Yout API Key')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
 
    await server.sendCommand("bc Server will restart in 10 seconds")
    await setTimeout(() => {  server.restart(); }, 10000);
    
}).catch(error => console.log(error));
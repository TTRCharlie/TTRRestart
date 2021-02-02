const Pterodactyl = require('pterodactyl.js');
 
const client = new Pterodactyl.Builder()
    .setURL('https://creative.ttr3.tk/')
    .setAPIKey('SGwEMY45QMMRP15v6QBvWUI1Pvf1QKKsTlugkHYABjBRmLAP')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
 
    await server.restart();
 
}).catch(error => console.log(error));
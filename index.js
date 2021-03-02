const Pterodactyl = require('pterodactyl.js');
 
const client = new Pterodactyl.Builder()
    .setURL('https://creative.ttr3.tk')
    .setAPIKey('xMORJrUOZGtnbnquNz5sPM9UTFMZMqz2zFpXG8pjSi7fHoQa')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
 
    await server.sendCommand('bc Server will restart in 10 seconds');
    
});

client.getClientServers()
.then(async servers => {
    let server = servers[4];
 
    await setTimeout(() => {  server.restart(); }, 10000);
    
}).catch(error => console.log(error));
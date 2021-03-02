const request = require('request');

const options = {
  url: 'Pterodactily API URL',
  headers: {
    'User-Agent': 'request',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer Pterodactily API Key'
  }
};

request.get(options);
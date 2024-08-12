const http = require('http');

const agent = new http.Agent({keepAlive: false});

const request = http.request({
    agent: agent,
    hostname: '127.0.0.1',
    port: 3001,
    method: 'GET',
    path: '/',
    headers: {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked'
    }
});

request.write(JSON.stringify({
    "name": "Akhil",
    "profession": "Engineer"
}));

request.end(JSON.stringify({
    "isOnline": true
}));
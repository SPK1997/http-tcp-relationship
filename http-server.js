const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('headers', req.headers);
    console.log('path', req.url);
    console.log('http method', req.method);
    let output = {};
    req.on('data', (chunk) => {
        output = {...output, ...JSON.parse(chunk.toString('utf-8'))};
    });
    req.on('end', () => {
        console.log('payload');
        console.log(output);
    })
});

server.listen(3001, '127.0.0.1', () => {
    console.log('http server listening on http://127.0.0.1:3001');
});

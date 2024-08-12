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

// hex stream for headers
// 474554202f20485454502f312e310d0a436f6e74656e742d547970653a206170706c69636174696f6e2f6a736f6e0d0a5472616e736665722d456e636f64696e673a206368756e6b65640d0a486f73743a203132372e302e302e313a333030310d0a436f6e6e656374696f6e3a20636c6f73650d0a0d0a

// hex stream for body
// 32380d0a7b226e616d65223a22416b68696c222c2270726f66657373696f6e223a22456e67696e656572227d0d0a31310d0a7b2269734f6e6c696e65223a747275657d0d0a300d0a0d0a

// GET / HTTP/1.1
// Content-Type: application/json
// Transfer-Encoding: chunked
// Host: 127.0.0.1:3001
// Connection: close


// {"name":"Akhil","profession":"Engineer"}{"isOnline":true}
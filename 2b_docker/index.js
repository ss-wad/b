const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello World\n');
});

server.listen(80);
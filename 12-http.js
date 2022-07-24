const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello, World!');
  }
  if (req.url === '/about') {
    res.end('About');
  }
  res.end(`<h1>Not found</h1>`)
});

server.listen(5000);
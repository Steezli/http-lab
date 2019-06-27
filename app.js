const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('screw you brah');
  console.log('requested');
});


module.exports = server;

const server = require('live-server');

const param = {
  host:'localhost',
  port: 3000,
  open: false,
  root:'./client'
}

server.start(param);
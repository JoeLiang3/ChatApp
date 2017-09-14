const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  socket.on('createMessage', (Message) => {
    console.log('create messaage', Message);
    var createdAt = new Date();
    socket.emit('newMessage', {
      from: Message.from,
      text: Message.text,
      createdAt: createdAt
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});

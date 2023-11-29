
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { default: axios } = require('axios');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ['GET', 'POST']
  }
})



io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //Listens and logs the message to the console
  socket.on('message', async (data) => {
    console.log('msg', data);

    const msg = {
      text: data.text,
      chatId: data.id,
      userId: data.userId
    }
    const { data: dataMsg } = await axios.post("http://192.168.0.2:8080/chat/message", msg)
    io.emit('messageResponse', dataMsg);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

server.listen(4000, () => console.log('Server is running on port 4000'));
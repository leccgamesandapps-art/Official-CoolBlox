import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'CoolBlox Backend Running 🚀' });
});

// WebSocket for multiplayer and chat
io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);
  
  socket.on('chat', (msg) => {
    io.emit('chat', msg);
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`CoolBlox Server listening on port ${PORT}`);
});

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const authRoutes = require('./routes/auth');
const Message = require('./models/Message');
const authMiddleware = require('./middleware/auth');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: '*' }
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/auth', authRoutes);

// Socket.IO - Gestión de mensajes
io.on('connection', (socket) => {
  socket.on('chatMessage', async ({ user, message }) => {
    const newMessage = new Message({ user, message });
    await newMessage.save();
    io.emit('message', newMessage);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

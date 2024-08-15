require('dotenv').config()

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const auth = require('./middleware/authMiddleware');
const { saveMessage } = require('./controllers/chatController');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Manejar conexión de Socket.IO
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('chatMessage', (msg) => {
    saveMessage(msg.user, msg.message);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const { saveMessage } = require('../controllers/chatController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Endpoint para guardar mensajes
router.post('/message', auth, (req, res) => {
  const { message } = req.body;
  saveMessage(req.user.name, message);
  res.status(200).send('Message saved');
});

module.exports = router;

const Message = require('../models/Message');

exports.saveMessage = async (user, message) => {
  try {
    const newMessage = new Message({
      user,
      message
    });

    await newMessage.save();
  } catch (err) {
    console.error('Error saving message:', err);
  }
};

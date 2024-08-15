import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', msg => {
      setMessages(prevMessages => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    socket.emit('chatMessage', { user: user.name, message });
    setMessage('');
  };

  return (
    <div className="chat-container h-full bg-gray-900">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === 'moderator' ? 'moderator' : ''}`}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
          className="input"
        />
        <button onClick={sendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
}

export default Chat;

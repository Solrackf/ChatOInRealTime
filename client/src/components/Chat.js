import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		socket.on("message", (msg) => {
			setMessages((prevMessages) => [...prevMessages, msg]);
		});

		return () => {
			socket.off("message");
		};
	}, []);

	const sendMessage = () => {
		const user = JSON.parse(localStorage.getItem("user"));
		socket.emit("chatMessage", { user: user.name, message });
		setMessage("");
	};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

	return (
		<div className="chat-container flex flex-col justify-between w-full h-full bg-gray-900 rounded-2xl overflow-hidden  p-4">
			<div className="messages h-full overflow-y-scroll">
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`message ${msg.user === "moderator" ? "moderator" : ""} bg-gray-800 w-fit py-2 px-4 rounded-lg max-w-[80%] mb-4`}
					>
						<h3 className="font-semibold capitalize break-words">{msg.user}</h3>
            <p className="text-sm break-words">{msg.message}</p>
					</div>
				))}
			</div>
			<div className="input-container gap-2 flex justify-between items-center h-fit w-full px-0 mt-4">
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
					placeholder="Escribe un mensaje..."
					className="input w-full rounded-lg p-2 bg-gray-950 outline-none"
				/>
				<button onClick={sendMessage} className="send-button flex items-center justify-center border-2 p-1 rounded-full cursor-pointer aspect-square h-fit w-fit">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="size-4 fill-gray-400 rounded-full aspect-square"
					>
						<path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Chat;

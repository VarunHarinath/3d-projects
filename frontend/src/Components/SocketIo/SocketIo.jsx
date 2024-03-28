import React, { useState } from "react";
import { io } from "socket.io-client";

const SocketIo = () => {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}

      {/* Box */}
      <div className="flex-grow p-8 overflow-y-auto">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md">
          {messages.map((msg, index) => (
            <p key={index} className="text-gray-800 mb-2">
              {msg}
            </p>
          ))}
        </div>
      </div>

      {/* Message and Room Input Fields */}
      <div className="flex p-4">
        <div className="flex-grow mr-2">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
        <div className="flex-grow">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
            placeholder="Enter room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Join
        </button>
      </div>
    </div>
  );
};

export default SocketIo;

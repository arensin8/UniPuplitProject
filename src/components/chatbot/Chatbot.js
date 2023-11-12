import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import TextWithCode from "./TextWithCode";
import "./Chatbot.css";

const Chatbot = ({ isVisible, toggleVisibility }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatWithGPT3 = async (userInput) => {
    const apiEndpoint = "http://127.0.0.1:5000/generate_text";

    const data = {
      user_message: userInput,
      chatbot: Object.values(messages),
      history: history,
    };

    try {
      const response = await axios.post(apiEndpoint, data);
      setHistory(response.data[1]);
      // console.log(response.data[1]);

      return response.data[1][response.data[1].length - 1];
    } catch (error) {
      console.error("Error communicating with the API:", error.message);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const aiMessage = { text: "...", user: false };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    const response = await chatWithGPT3(input);
    const newAiMessage = { text: response, user: false };
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    setInput("");
  };

  return (
    <div className={`chatbot-container ${isVisible ? "" : "hidden"}`}>
      <div className="chatbot-messages">
        <p className="ChatTitle">
          Hello , lets answer some of your questions..
        </p>
        <button onClick={toggleVisibility}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user ? "user-message" : "ai-message"
            }`}
          >
            <TextWithCode text={message.text} />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;

import React, { useState } from "react";
import Chatbot from "./Chatbot";

const ChatIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  });
  return (
    <>
      {backToTop && (
        <div className={`chatbox ${isVisible ? "chatbox--active" : ""}`}>
          <Chatbot isVisible={isVisible} toggleVisibility={toggleVisibility} />
          <div className="chatbox__button">
            <button onClick={toggleVisibility}>
              <i class="fa-solid fa-comment"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatIcon;

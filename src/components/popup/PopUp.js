import React from "react";
import "./PopUp.css";
import { motion } from "framer-motion";

const PopUp = ({ content, onClose }) => {
  return (
    <>
      <div className="modal">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, easing: "easeOutBack" }}
        >
          <div onClick={onClose} className="overlay"></div>
          <div className="modal-content">
            <div className="model-title">
              <span>{content.i}</span>
              <h2>{content.title}</h2>
            </div>
            <p>{content.fullDesc}</p>
            <span className="close-modal" onClick={onClose}>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PopUp;

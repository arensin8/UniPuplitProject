import React from "react";
import "./Error.css";
import error from "../../assets/error.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <div className="error">
          <h1>Page not found!</h1>
          <img src={error} alt="error" />
          <Link to="/">
            <button>Go to homepage</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
export default Error;

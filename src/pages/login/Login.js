import React from "react";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import loginImage from "../../assets/Reset.gif";

const Login = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Header />
        <div className="loginContainer">
          <div className="image">
            <img src={loginImage} alt="login" />
          </div>
          <h1 className="title">Login</h1>
          <div className="textContainer">
            <h3>Please enter your credentials to login</h3>
            <div className="form">
              <input type="username" placeholder="Enter your username" />
              <input type="password" placeholder="Enter your password" />
              {/* <ReCAPTCHA
                sitekey="Your client site key"
                onChange={onChange}
                className="captcha"
              /> */}
              <button type="submit">
                Login
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Login;

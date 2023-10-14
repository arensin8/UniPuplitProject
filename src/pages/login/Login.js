import React, { useState } from "react";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import loginImage from "../../assets/Reset.gif";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const togglePasswordVisibility = () => {
    if (password !== "") {
      setPasswordVisible(!passwordVisible);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

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
          <h1 className="title">Login</h1>
          <div className="image">
            <img src={loginImage} alt="login" />
          </div>
          <div className="textContainer">
            <h3>Please enter your credentials to login</h3>
            <div className="form">
              <input type="username" placeholder="Enter your username" />
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <span className="eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <i class="fa-regular fa-eye-slash"></i>
                ) : (
                  <i class="fa-solid fa-eye"></i>
                )}
              </span>
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

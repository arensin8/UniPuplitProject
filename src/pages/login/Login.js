import React, { useState } from "react";
import "./Login.css";
// import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import loginImage from "../../assets/login.png";
import Example from "./Btn";

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
        <div className="loginContainer" data-aos="fade-up">
          {/* <h1 className="title">Login</h1> */}
          <div className="image">
            <img src={loginImage} alt="login" />
          </div>
          <div className="textContainer">
            <h2>
              Please enter your username and password to enter into admin panel.
            </h2>
            <div className="form">
              <input type="username" placeholder="Enter your username" />
              <p>This is a error for username</p>
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
              <p>This is a error for password</p>
              <Example />
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Login;

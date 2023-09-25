import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Header />
        <div className="title">
          <h1>Կապ մեզ հետ</h1>
        </div>
        <div class="container">
          <div class="content">
            <div class="left-side">
              <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Address</div>
                <div class="text-one">Surkhet, NP12</div>
                <div class="text-two">Birendranagar 06</div>
              </div>
              <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone</div>
                <div class="text-one">+0098 9893 5647</div>
              </div>
              <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">codinglab@gmail.com</div>
                <div class="text-two">info.codinglab@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <h1 class="topic-text">Send us a message</h1>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <textarea
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                  ></textarea>
                </div>

                <div class="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Contact;

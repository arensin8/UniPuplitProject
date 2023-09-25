import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import Map from "./Map";
import aboutgif from "../../assets/about.gif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Header />

        <section id="about-section">
          <div class="about-left" data-aos="fade-up">
            <img src={aboutgif} />
          </div>

          <div class="about-right">
            <h1>Մեր մասին</h1>
            <p className="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              fugiat a dolorem at similique maxime dolorum dolore enim dicta
              voluptatibus, illum recusandae, vel optio tempore ipsum incidunt
              eum. Aspernatur, repellendus.
            </p>
            <div class="address">
              <ul>
                <li>
                  <span class="address-logo">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <p>Address</p>
                  <span class="saprater">:</span>
                  <p>Jaipur, Rajasthan, India</p>
                </li>
                <li>
                  <span class="address-logo">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <p>Phone No</p>
                  <span class="saprater">:</span>
                  <p>+91 987-654-4321</p>
                </li>
                <li>
                  <span class="address-logo">
                    <i class="far fa-envelope"></i>
                  </span>
                  <p>Email ID</p>
                  <span class="saprater">:</span>
                  <p>crowncoder@gmail.com</p>
                </li>
                <li>
                  <span class="address-logo">
                    <i class="fa-brands fa-facebook"></i>
                  </span>
                  <p>Facebook</p>
                  <span class="saprater">:</span>
                  <p>@polytechnicArmenia</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Map />

        <Footer />
      </motion.div>
    </>
  );
};

export default About;

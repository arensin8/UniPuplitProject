import React from "react";
import "./About.css";
import Map from "./Map";

import aboutgif from "../../assets/about.png";
import { motion } from "framer-motion";
import Layout from "../../layouts/Layout";
import data from "../../data/aboutPage";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Layout>
          <section id="about-section" data-aos="fade-up">
            <div class="about-left">
              <img src={aboutgif} alt="about" />
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
                  {data.map((item) => (
                    <li key={item.id}>
                      <span class="address-logo">{item.icon}</span>
                      <p>{item.title}</p>
                      <span class="saprater">:</span>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <Map />
        </Layout>
      </motion.div>
    </>
  );
};

export default About;

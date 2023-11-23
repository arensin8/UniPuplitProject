import React, { useState } from "react";
import "./Roadmap.css";
import Header from "../../components/header/Header";
import { servicesData } from "../../data/services";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { frontRoadmapData, backRoadmapData } from "../../data/roadmap";
import BackToTop from "../../components/backtotop/BackToTop";
import ChatIcon from "../../components/chatbot/ChatIcon";

const Roadmap = () => {
  const [MenuData, setMenuData] = useState(servicesData);
  const [parent] = useAutoAnimate();
  const filter = (type) => {
    setMenuData(servicesData.filter((service) => service.type === type));
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
        <section class="timeline">
          <h1>Our Roadmap</h1>
          <h3>In this section you will know about our roadmap</h3>

          {/* front end section */}
          <h2 class="mainTitle">Front-End Development</h2>
          {frontRoadmapData.map((data) => (
            <>
              <div class="timeline-items">
                <div class="line"></div>
                <div class={data.className} data-aos="fade-up">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div className="timeline-cont-title">
                      <span>{data.i}</span>
                      <h3>{data.title}</h3>
                    </div>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            </>
          ))}

          {/* back end section */}
          <h2 class="mainTitle back">Back-End Development</h2>
          {backRoadmapData.map((data) => (
            <>
              <div class="timeline-items">
                <div class="line"></div>
                <div class={data.className} data-aos="fade-up">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div className="timeline-cont-title">
                      <span>{data.i}</span>
                      <h3>{data.title}</h3>
                    </div>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>

        {/* <div className="container1">
          <h1>what you will learn</h1>

          <div className="services" data-aos="fade-up">
            <ul className="menu">
              <li onClick={() => setMenuData(servicesData)}>All</li>
              <li onClick={() => filter("front end")}>Front-End</li>
              <li onClick={() => filter("back end")}>Back-End</li>
              <li onClick={() => filter("cloud")}>Cloud</li>
            </ul>

            <div className="list" ref={parent}>
              {MenuData.map((service, i) => (
                <div className="service">
                  <span>{service.i}</span>
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <Footer />
        <BackToTop />
        <ChatIcon />
      </motion.div>
    </>
  );
};

export default Roadmap;

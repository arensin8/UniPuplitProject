import React, { useState } from "react";
import "./Roadmap.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { frontRoadmapData, backRoadmapData } from "../../data/roadmap";
import BackToTop from "../../components/backtotop/BackToTop";
import ChatIcon from "../../components/chatbot/ChatIcon";
import PopUp from "../../components/popup/PopUp";

const Roadmap = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleSectionClick = (data) => {
    setPopupContent(data);
    setPopupVisible(true);
    document.body.classList.add("body-no-scroll");
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.classList.remove("body-no-scroll");
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

          {/* front end section */}
          <h2 class="mainTitle">Front-End Development</h2>
          {frontRoadmapData.map((data) => (
            <>
              <div class="timeline-items">
                <div class="line"></div>
                <div class={data.className} data-aos="fade-up">
                  <div class="timeline-dot"></div>
                  <div
                    class="timeline-content"
                    onClick={() => handleSectionClick(data)}
                  >
                    <div className="timeline-cont-title">
                      <span>{data.i}</span>
                      <h3>{data.title}</h3>
                    </div>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>

              {/* {popupVisible && (
                <PopUp content={popupContent} onClose={closePopup} />
              )} */}
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
                  <div
                    class="timeline-content"
                    onClick={() => handleSectionClick(data)}
                  >
                    <div className="timeline-cont-title">
                      <span>{data.i}</span>
                      <h3>{data.title}</h3>
                    </div>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
              {popupVisible && (
                <PopUp content={popupContent} onClose={closePopup} />
              )}
            </>
          ))}
        </section>

        <Footer />
        {!popupVisible && (
          <>
            <BackToTop />
            <ChatIcon />
          </>
        )}
      </motion.div>
    </>
  );
};

export default Roadmap;

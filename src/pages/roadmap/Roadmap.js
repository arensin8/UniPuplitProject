import React, { useState } from "react";
import "./Roadmap.css";
import { motion } from "framer-motion";
import { frontRoadmapData, backRoadmapData } from "../../data/roadmap";

import PopUp from "../../components/popup/PopUp";
import Layout from "../../layouts/Layout";

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
        transition={{ duration: 0.4, easing: "easeOutBack" }}
      >
        <Layout>
          <section className="timeline">
            <h1>Our Roadmap</h1>

            {/* Front-end section */}
            <h2 className="mainTitle">Front-End Development</h2>
            {frontRoadmapData.map((data) => (
              <div className="timeline-items" key={data.id}>
                <div className="line"></div>
                <div className={data.className} data-aos="fade-up">
                  <div className="timeline-dot"></div>
                  <div
                    className="timeline-content"
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
            ))}

            {/* Back-end section */}
            <h2 className="mainTitle back">Back-End Development</h2>
            {backRoadmapData.map((data) => (
              <div className="timeline-items" key={data.id}>
                <div className="line"></div>
                <div className={data.className} data-aos="fade-up">
                  <div className="timeline-dot"></div>
                  <div
                    className="timeline-content"
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
            ))}

            {/* Popup */}
            {popupVisible && (
              <PopUp content={popupContent} onClose={closePopup} />
            )}
          </section>
        </Layout>
      </motion.div>
    </>
  );
};

export default Roadmap;

import React from "react";
import BackToTop from "../../components/backtotop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/services/Services";
import Slider from "../../components/Slider/Slider";
import Testimonial from "../../components/Testimonials/Testimonial";
import Virtual from "../../components/virtual/Virtual";
import Accordion from "../../components/accordion/Accordion";
import "./Home.css";
import { motion } from "framer-motion";

import { useScroll, useTransform } from "framer-motion";

import { StudentsTitle, Title } from "./style.js";

import Plx from "react-plx";
import image1 from "../../components/Hero/bg.png";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 800]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        {/* <Plx
          parallaxData={[
            {
              start: 0,
              end: 800,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 4,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: -1,
          }}
        >
          <img style={{ width: "100%" }} src={image1} alt="foreground" />
        </Plx> */}
        <Header />
        <Hero />
        <Slider />
        <Title style={{ x }}>Lets start right now</Title>
        <Virtual />
        <Services />
        <Testimonial />

        <Accordion />

        <Footer />
        <BackToTop />
      </motion.div>
    </>
  );
};

export default Home;

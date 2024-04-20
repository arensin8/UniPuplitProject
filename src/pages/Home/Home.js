import React, { useState } from "react";
import Services from "../../components/services/Services";
import Slider from "../../components/Slider/Slider";
import Testimonial from "../../components/Testimonials/Testimonial";
import Virtual from "../../components/virtual/Virtual";
import Accordion from "../../components/accordion/Accordion";

import "./Home.css";
import { motion } from "framer-motion";

import { Title } from "./style.js";
import ParticleRing from "../../components/Hero/ParticleRing";
import GsapText from "../../components/gsapText/GsapText";
import GsapText2 from "../../components/gsapText/GsapText2";
import Layout from "../../layouts/Layout";

const Home = () => {
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Layout>
          <ParticleRing />
          <GsapText />
          {/* <Slider /> */}

          {/* <Title style={{ x, willChange: "transform" }}>
          Lets start right now
        </Title> */}

          <Virtual />
          <Services />
          <GsapText2 />
          <Testimonial />
          <Accordion />
        </Layout>
      </motion.div>
    </>
  );
};

export default Home;

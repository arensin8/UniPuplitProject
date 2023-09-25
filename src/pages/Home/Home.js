import React from "react";
import BackToTop from "../../components/backtotop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/services/Services";
import Slider from "../../components/Slider/Slider";
import Testimonial from "../../components/Testimonials/Testimonial";
import Virtual from "../../components/virtual/Virtual";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Header />
        <Hero />
        <Slider />
        <Virtual />
        <Services />
        <Testimonial />
        <Footer />
        <BackToTop />
      </motion.div>
    </>
  );
};

export default Home;

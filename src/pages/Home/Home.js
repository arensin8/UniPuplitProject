import React from "react";
import BackToTop from "../../components/backtotop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/services/Services";
import Slider from "../../components/Slider/Slider";
import Testimonial from "../../components/Testimonials/Testimonial";
import Virtual from "../../components/virtual/Virtual";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Services />
      <Testimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;

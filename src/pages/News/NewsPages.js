import React from "react";
import NewsHero from "./NewsHero/NewsHero";
import Homes from "./MainContent/Homes/Homes";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import BackToTop from "../../components/backtotop/BackToTop";
import ChatIcon from "../../components/chatbot/ChatIcon";

const NewsPages = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Header />
        <NewsHero />
        <Homes />
        <ChatIcon />
        <BackToTop />
        <Footer />
      </motion.div>
    </div>
  );
};

export default NewsPages;

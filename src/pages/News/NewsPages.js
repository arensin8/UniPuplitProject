import React from "react";
import NewsHero from "./NewsHero/NewsHero";
import Homes from "./MainContent/Homes/Homes";
import { motion } from "framer-motion";
import Layout from "../../layouts/Layout";

const NewsPages = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Layout>
          <NewsHero />
          <Homes />
        </Layout>
      </motion.div>
    </div>
  );
};

export default NewsPages;

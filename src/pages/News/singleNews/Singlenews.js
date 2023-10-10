import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import popular from "../../../data/news";
import "./Singlenews.css";

const Singlenews = () => {
  const { id } = useParams();
  const newsItem = popular.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return <div>News not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="sNewsContainer">
        <div className="image-conatiner">
          <img src={newsItem.cover} />
        </div>
        <h2>{newsItem.title}</h2>
        <span>{newsItem.category}</span>
        <div className="date">
          <i class="fas fa-calendar-days"></i>
          <label>{newsItem.date}</label>
          <p>{newsItem.desc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Singlenews;

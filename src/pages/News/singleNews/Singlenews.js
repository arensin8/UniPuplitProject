import React from "react";
import { useParams } from "react-router-dom";
import popular from "../../../data/news";
import Layout from "../../../layouts/Layout";
import "./Singlenews.css";

const Singlenews = () => {
  const { id } = useParams();
  const newsItem = popular.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return <div>News not found.</div>;
  }

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default Singlenews;

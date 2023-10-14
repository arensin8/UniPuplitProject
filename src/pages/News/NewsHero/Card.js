import React from "react";
import { Link } from "react-router-dom";
import "./NewsHero.css";

const Card = ({ item: { id, cover, category, title, date } }) => {
  return (
    <>
      <div className="box">
        <Link to={`/news/${id}`}>
          <div className="img">
            <img src={cover} alt="" />
          </div>
          <div className="text">
            <span className="category">{category}</span>
            <h1 className="titleBg">{title}</h1>
            <div className="date">
              <i class="fas fa-calendar-days"></i>
              <label>{date}</label>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;

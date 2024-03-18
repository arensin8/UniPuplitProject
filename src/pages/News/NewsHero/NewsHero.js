import React, { useState } from "react";
import popular from "../../../data/news";

import "./NewsHero.css";
import Card from "./Card";

const NewsHero = () => {
  const [items, setItems] = useState(popular);
  const filteredItems = items.filter((item, index) => index < 4);

  return (
    <>
      <div className="title">
        <h1>Our latest News</h1>
      </div>
      <section className="hero" data-aos="fade-up">
        <div className="heroContainer">
          {filteredItems.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NewsHero;

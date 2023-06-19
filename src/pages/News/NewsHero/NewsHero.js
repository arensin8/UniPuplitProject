import React, { useState } from "react";
import { hero } from "../../../dummyData";
import "./NewsHero.css";
import Card from "./Card";

const NewsHero = () => {
  const [items, setItems] = useState(hero);

  return (
    <>
     <div className="title">
          <h1>Our latest News</h1>
    </div>
      <section className="hero">
        <div className="heroContainer">
          {items.map((item) => {
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

import React from "react";
import Heading from "../../../../components/heading/Heading";
import "./style.css";
import popular from "../../../../data/news";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  return (
    <section className="popular">
      <Heading title="News" />
      <Slider {...settings}>
        {popular.map((val) => {
          return (
            <div className="items" key={val.id}>
              <Link to={`/news/${val.id}`}>
                <div className="box shadow">
                  <div className="images row">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div class="category category1">
                      <span>{val.catgeory}</span>
                    </div>
                  </div>
                  <div className="text row">
                    <h1 className="title">{val.title.slice(0, 40)}...</h1>
                    <div className="date">
                      <i class="fas fa-calendar-days"></i>
                      <label>{val.date}</label>
                    </div>
                    <div className="comment">
                      <i class="fas fa-comments"></i>
                      <label>{val.comments}</label>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Popular;

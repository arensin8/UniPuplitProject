import React, { useState } from "react";
import "./Students.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Slide from "./Slide";
import data from "./StudentsApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Students = () => {
  return (
    <>
      <Header />
      <section className="students">
        <div className="container">
          <div className="heading text-center">
            <h1 className="title">Our Graduated students comments</h1>
          </div>
          <div className="slide">
            {data.map((value, valueIndex) => {
              return (
                <Slide key={value.id} {...value} valueIndex={valueIndex} />
              );
            })}

            <div className="slide_button">
              <button className="btn_shadow prev_btn">
                <i class="fas fa-arrow-left"></i>
              </button>
              <button className="btn_shadow next_btn">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Students;

import React, { useState } from "react";
import "./Students.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/Student1.jpg";
import slide_image_2 from "../../assets/Student2.jpg";
import slide_image_3 from "../../assets/Student1.jpg";
import slide_image_4 from "../../assets/Student2.jpg";
import slide_image_5 from "../../assets/Student1.jpg";
import slide_image_6 from "../../assets/Student2.jpg";
import slide_image_7 from "../../assets/Student1.jpg";

const Students = () => {
  return (
    <>
      <h1 className="title">Our Graduated Students</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_1} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_2} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_3} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_4} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_5} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_6} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentSlide">
            <i class="fa-solid fa-graduation-cap"></i>
            <img src={slide_image_1} className="stImg" alt="slide_image" />
            <div className="slideText">
              <h1>Aren Sinaei</h1>
              <h3>Programmer</h3>
              <p>klheckghecghehcehcekkehckehjewjgeihehkeh</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Students;

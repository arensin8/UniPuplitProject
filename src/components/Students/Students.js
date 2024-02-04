import React, { useState } from "react";
import "./Students.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { studentsData } from "../../data/studentsData";

const Students = () => {
  return (
    <>
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
        className="swiper-container"
      >
        {studentsData.map((student, index) => (
          <SwiperSlide>
            <div className="contentSlide">
              <i class="fa-solid fa-graduation-cap"></i>
              <img src={student.image} className="stImg" alt="slide_image" />
              <div className="slideText">
                <h1>{student.fullname}</h1>
                <h3>{student.position}</h3>
                <p>{student.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

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

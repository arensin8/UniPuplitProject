import React from "react";
import css from "./Testimonial.module.css";
import Review from "../../assets/review.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import Students from "../Students/Students";
const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container} data-aos="fade-down">
          <span>Mer usanoxneri karciknery</span>
          <span>
            Karox eq desnel bolory aysdex mer shat sireli usanoxneri koxmic
          </span>
        </div>

        <img
          src={Review}
          className={css.img}
          alt="review"
          data-aos="fade-down"
        />

        <div className={css.container} data-aos="fade-down">
          <span>100k +</span>
          <span>happy students</span>
        </div>
      </div>

      <div className={css.carousel} data-aos="fade-up">
        <Students />
      </div>
    </div>
  );
};

export default Testimonial;

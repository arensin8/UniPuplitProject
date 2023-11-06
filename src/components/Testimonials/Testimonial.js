import React from "react";
import css from "./Testimonial.module.css";
import Review from "../../assets/review.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import Students from "../Students/Students";

import { useScroll, useTransform } from "framer-motion";
import { StudentTitle } from "./style";

const Testimonial = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div className={css.testimonials}>
      <StudentTitle style={{ x }}>Graduated students</StudentTitle>
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

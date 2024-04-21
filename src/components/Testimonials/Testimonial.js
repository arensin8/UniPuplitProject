import React from "react";
import css from "./Testimonial.module.css";
import Review from "../../assets/review.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Students from "../Students/Students";

import { useScroll, useTransform } from "framer-motion";
import { StudentTitle } from "./style";

const Testimonial = () => {
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div className={css.testimonials}>
      {/* <StudentTitle style={{ x }}>Graduated students</StudentTitle> */}

      <div className={css.carousel} data-aos="fade-up">
        <Students />
      </div>
    </div>
  );
};

export default Testimonial;

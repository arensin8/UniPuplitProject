import React from "react";
import css from "./Testimonial.module.css";
import Review from "../../assets/review.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Mer usanoxneri karciknery</span>
          <span>
            Karox eq desnel bolory aysdex mer shat sireli usanoxneri koxmic
          </span>
        </div>

        <img src={Review} alt="review" width={400} data-aos="fade-down" />

        <div className={css.container}>
          <span>100k +</span>
          <span>happy students</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          className={css.tCarousel}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div className={css.testimonial}>
              <img src={profile1} alt="" />
              <span>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </span>
              <hr />
              <span>Aren</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.testimonial}>
              <img src={profile2} alt="" />
              <span>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </span>
              <hr />
              <span>Edmon</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.testimonial}>
              <img src={profile1} alt="" />
              <span>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </span>
              <hr />
              <span>David</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.testimonial}>
              <img src={profile2} alt="" />
              <span>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </span>
              <hr />
              <span>Aren</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.testimonial}>
              <img src={profile1} alt="" />
              <span className={css.comment}>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </span>
              <hr />
              <span className={css.name}>Aren</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

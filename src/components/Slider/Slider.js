import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../../assets/Hero.jpg";
import popular from "../../data/news";

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        data-aos="fade-up"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={true}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: { slidesPerView: 1 },
        }}
      >
        {popular.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="containerSlide">
              <img src={item.cover} alt="" />
              <div className="slideText">
                <h2>{item.title.slice(0, 30)}</h2>
                <span>{item.desc.slice(0, 40)} </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Slider;

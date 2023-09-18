import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../../assets/Hero.jpg";

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
        <SwiperSlide>
          <div className="containerSlide">
            <img src={img1} alt="" />
            <div className="slideText">
              <h2>Title</h2>
              <span>desc nhswhc hswgnxs hnjsvghc skjhcks kshc </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="containerSlide">
            <img src={img1} alt="" />
            <div className="slideText">
              <h2>Title</h2>
              <span>desc nhswhc hswgnxs hnjsvghc skjhcks kshc </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerSlide">
            <img src={img1} alt="" />
            <div className="slideText">
              <h2>Title</h2>
              <span>desc nhswhc hswgnxs hnjsvghc skjhcks kshc </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="containerSlide">
            <img src={img1} alt="" />
            <div className="slideText">
              <h2>Title</h2>
              <span>desc nhswhc hswgnxs hnjsvghc skjhcks kshc </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

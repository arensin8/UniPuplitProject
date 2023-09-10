import React, { useState } from "react";
import './Students.module.css'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Students = () => {
 
  
  return (
    <>
      <Header />

      <h1 className='title'>Our Graduated students comments</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper1"
        data-aos="fade-down"
      >
        <SwiperSlide>
          <div className='swiperContent'>
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h2>Anna Marie</h2>
            <h4>Designer</h4>
            <p>
              lorem eif kns fo3ehk ekbf ol ekhf khej fmejh fehk fkhk ekhfk lhekf
              khk ekhfkh khehfk je fk3eoif oh3kjgf o03kigj uicgjew 9ecj lsc lkj
              cghg s;co isgjc klsjlc jsgkc ksgkcg k s kchkcw hckhks kchks ;coy
              e;\ c; kskghjcgi ecjleck hjegcj ;e olhck [eki p uc e]
            </p>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <i class="fa-solid fa-comments"></i>
          </div>
        </SwiperSlide>
      </Swiper>

      <Footer />
    </>
  );
};

export default Students;

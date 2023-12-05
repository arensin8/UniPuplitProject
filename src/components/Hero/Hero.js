import React from "react";
import css from "./Hero.module.css";

import HeroImg from "../../assets/Hero3.png";
import scrollImg from "../../assets/scroll.png";
import dividerBg from "./back6.png";

import Plx from "react-plx";

import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  const scrollToSection = () => {
    scroll.scrollTo("sectionToScroll", {
      smooth: true,
      duration: 600,
    });
  };

  const backgroundImageUrl = "url('dividerBg')";

  return (
    <>
      <div className={css.container}>
        {/* left side */}
        <div className={css.h_sides} data-aos="fade-down">
          <span className={css.text1}>ՏՏ Ամբիոն</span>

          <div className={css.text2}>
            <span>Տարբեր մասնաճյուղեր</span>
            <span>
              յբո ֆդօիփհո ֆւոդց օո դցգիւ ոիհս ցիոեգս ցօիոգյ սցրւգոկյկկ ցիգ ւիկգ
            </span>
          </div>
        </div>

        {/* middle side of hero */}
        <div className={css.wrapper}>
          <img src={HeroImg} alt="logo" className={css.parLogo} />
        </div>

        {/* right side */}
        <div className={css.h_sides}>
          <div className={css.traffic}>
            <span data-aos="fade-down">100k+</span>
            <span>Yearly students</span>
          </div>
          <div className={css.traffic} data-aos="fade-down">
            <span>700k+</span>
            <span>Graduated students</span>
          </div>
        </div>
      </div>

      <Link to="sectionToScroll" smooth={true} duration={600}>
        <div className={css.scrolling} onClick={scrollToSection}>
          <p>Scroll down to reveal the story</p>

          <span className={css.loader}></span>
        </div>
      </Link>

      <div className={css.custom_shape_divider_bottom_1701798693}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <rect x="1200" height="3.6"></rect>
          <rect height="3.6"></rect>
          <path
            d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
            className={css.shape_fill}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Hero;

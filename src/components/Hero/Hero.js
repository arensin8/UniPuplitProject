import React from "react";
import css from "./Hero.module.css";

import HeroImg from "../../assets/Hero3.png";
import scrollImg from "../../assets/scroll.png";
import Plx from "react-plx";

import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  const scrollToSection = () => {
    scroll.scrollTo("sectionToScroll", {
      smooth: true,
      duration: 600,
    });
  };

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
        <div className={css.scrolling}>
          <p>Scroll down </p>
          <img onClick={scrollToSection} src={scrollImg} />
        </div>
      </Link>
    </>
  );
};

export default Hero;

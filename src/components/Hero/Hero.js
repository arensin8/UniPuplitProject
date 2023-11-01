import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.gif";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../assets/icon.jpg";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides} data-aos="fade-down">
        <span className={css.text1}>ՏՏ Ամբիոն</span>

        <div className={css.text2} data-aos="fade-down">
          <span>Տարբեր մասնաճյուղեր</span>
          <span>
            յբո ֆդօիփհո ֆւոդց օո դցգիւ ոիհս ցիոեգս ցօիոգյ սցրւգոկյկկ ցիգ ւիկգ
          </span>
        </div>
      </div>

      {/* middle side of hero */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={logo} alt="logo" className={css.midLogo}/>
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
  );
};

export default Hero;

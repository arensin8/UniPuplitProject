import React from "react";
import css from "./Hero.module.css";

import HeroImg from "../../assets/Hero3.png";
import Plx from "react-plx";
import Slider from "../Slider/Slider";

const Hero = () => {
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
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 800,
                properties: [
                  {
                    startValue: 1,
                    endValue: 1.3,
                    property: "scale",
                  },
                ],
              },
            ]}
          >
            <img src={HeroImg} alt="logo" className={css.parLogo} />
          </Plx>
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
    </>
  );
};

export default Hero;

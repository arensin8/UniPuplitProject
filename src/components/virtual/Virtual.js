import React, { useState } from "react";
import css from "./Virtual.module.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Virtual1 from "../../assets/virtual2.jpg";
import Virtual2 from "../../assets/virtual1.jpg";




const Virtual = () => {
  const [sliderActive, setSliderActive] = useState(false);
  

  const handleSliderClick = () => {
    // Toggle the sliderActive state to manage the styles
    setSliderActive(!sliderActive);
    console.log("dddd");

    // Apply or remove styles to the body element
    if (!sliderActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  };

  return (
    <>
     

      <div className={css.virtual}>
        <div className={css.left} data-aos="fade-down">
          <span>Virtual try-on</span>
          <span>Mez het amen inchy lav e!!</span>
          <span>Try now!</span>
          <img src={shade} alt="shade" />
        </div>

        <div className={css.right} data-aos="fade-up">
          <div className={css.wrapper}>
            <ReactCompareImage
              onClick={handleSliderClick}
              leftImage={Virtual1}
              rightImage={Virtual2}
              className={css.rightImage}
              leftImageCss={{ borderRadius: "10px" }}
              rightImageCss={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Virtual;

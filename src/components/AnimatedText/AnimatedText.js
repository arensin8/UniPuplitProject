import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import css from "./AnimatedText.module.css";
import SplitText from "split-text-js";

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const splitText = new SplitText(textRef.current, { type: "words,chars" });
      const splitElements = splitText.chars; // Access split elements directly from SplitText instance

      // Create GSAP animations for each split text element
      gsap
        .from(
          splitElements,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
          },
          "<",
        )
        .then(() => {
          gsap.to(
            splitElements,
            {
              opacity: 0,
              y: -80,
              rotateX: 90,
              stagger: 0.02,
            },
            "<1",
          );
        });
    }
  }, []);

  return (
    <div className={css.container}>
      <div className={css.text_wrapper} ref={textRef}>
        <p>Frontend developer</p>
        <p>Backend developer</p>
        <p>Ui/UX designer</p>
        <p>Artificial Intelligence</p>
        <p>Fullstack developer</p>
      </div>
    </div>
  );
};

export default AnimatedText;

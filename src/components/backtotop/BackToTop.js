import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
        <button className="topBtn" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default BackToTop;

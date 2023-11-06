// React Component
import React, { useState, useRef, useEffect } from "react";
import data from "../../data/accrodion";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [maxHeights, setMaxHeights] = useState(Array(data.length).fill("0px"));
  const contentRefs = useRef(data.map(() => React.createRef()));

  useEffect(() => {
    const newMaxHeights = data.map((_, index) =>
      index === activeIndex
        ? `${contentRefs.current[index].current.scrollHeight}px`
        : "0px",
    );
    setMaxHeights(newMaxHeights);
  }, [activeIndex]);

  function toggleAccordion(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <>
      <div className="accContainer" data-aos="fade-down">
        <div>
          <span className="accTitle">Frequently asked questions</span>
          <h1>Lets answer some of your questions</h1>
        </div>

        <div className="accFaq">
          {data.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accFaqHeading">
                <h3 className={activeIndex === index ? "active" : ""}>
                  {item.question}
                </h3>

                <div>
                  {activeIndex === index ? (
                    <>
                      <span className="minus">
                        <i class="fa-solid fa-minus"></i>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="plus">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div
                className={`accFaqAnswer ${
                  activeIndex === index ? "open" : ""
                }`}
                style={{ maxHeight: maxHeights[index] }}
                ref={contentRefs.current[index]}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <model
        src="./scene.gltf"
        style={{ width: "50vw", height: "50vw" }}
      ></model>
    </>
  );
};

export default Accordion;

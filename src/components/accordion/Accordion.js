import React, { useState } from "react";
import data from "./accordionData";
import "./Accordion.css";

const Accordion = () => {
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  }

  return (
    <>
      <div className="accContainer">
        <div>
          <span className="accTitle">Frequently asked questiond</span>
          <h1>Lets answer some of your questions</h1>
        </div>

        <div className="accFaq">
          {data.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accFaqHeading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>

                <div>
                  {accordion === index ? (
                    <>
                      <span className="verticle">
                        <i class="fa-solid fa-arrow-up"></i>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="verticle">
                        <i class="fa-solid fa-arrow-down"></i>
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div>
                <p className={accordion === index ? "active" : "inActive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;

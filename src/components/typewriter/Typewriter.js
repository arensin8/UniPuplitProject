import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

const TypewriterHero = () => {
  const [state] = useState({
    titleOne: "Polytechnic,",
    titleTwo: "Is the best,",
    titleThree: "University",
  });
  return (
    <div className="home">
      <div className="home-intro">
        <h2>
          <div className="titleOne">{state.titleOne}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
        </h2>
        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "In Armenia and europe.",
                "In lovely Yerevan .",
                "In the world right now.",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypewriterHero;

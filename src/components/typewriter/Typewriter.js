import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

const TypewriterHero = () => {
  const [state] = useState({
    titleOne: "Is the best,,",
    titleTwo: "University",
  });
  return (
    <div className="home">
      <div className="home-intro">
        <h2>
          <div className="text">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 120,
                strings: ["Polytechnic"],
              }}
            />
          </div>
          <div className="titleOne">{state.titleOne}</div>
          <div className="titleTwo">{state.titleTwo}</div>
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

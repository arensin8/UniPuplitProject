import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function GsapText() {

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".singleLine div ", {
      y: 300,
      ease: "power4.out",
      delay: 1,
      duration: 3,
      stagger: {
        amount: 0.9,
      },
    });

    return () => {};
  });

  return (
    <AppContainer>
      <Wrapper>
        <Line className="singleLine">
          <Text>
            <span>L</span>E<span>T</span>'S<span></span>,
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            STA<span>R</span>T
            <span>
              <span> </span>T
            </span>
            HE
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            <span>JOU</span>RN<span>EY</span>
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            {" "}
            R<span>IG</span>HT<span> </span>N<span>OW</span>.
          </Text>
        </Line>
      </Wrapper>
    </AppContainer>
  );
}

export default GsapText;

const AppContainer = styled.div`
  width: 90vw;
  height: 100vh;
  color: #000000;
  position: relative;
  margin-top: -10%;
  
  display: flex;
  align-items: center;
  text-align: center !important;
  justify-content: center;
  padding-left: 10vw;

  @media screen and (max-width: 550px) {
    height: 50vh;
    width: 95vw;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 10vw;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    height: 14vw;
  }

  &:nth-of-type(1) {
    display: flex;
    justify-content: flex-start;
  }
  &:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
  }
  &:nth-of-type(3) {
    display: flex;
    justify-content: flex-start;
  }
  &:nth-of-type(4) {
    display: flex;
    justify-content: center;
  }
`;

const Text = styled.div`
  position: absolute;
  font-size: 10vw;
  color: #fff;
  line-height: 10vw;

  span {
    font-family: "Major Mono Display", monospace;
    color: rgb(150, 149, 149);
    font-size: 10vw;
  }
`;

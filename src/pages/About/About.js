import React, { Suspense } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import Map from "./Map";

import about from "../../assets/about.png";
import { motion } from "framer-motion";
import ChatIcon from "../../components/chatbot/ChatIcon";
import BackToTop from "../../components/backtotop/BackToTop";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
// import Building from "./Building";
import Scene from "./scene.gltf";
import Model from "./Scene";

const About = () => {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
};

export default About;

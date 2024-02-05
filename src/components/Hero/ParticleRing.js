import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import Hero from "./Hero";
import styles from "./Hero.module.css";

const ParticleRing = () => {
  const [numPointsToShow, setNumPointsToShow] = useState(300); // Initial number of points to show
  const maxPoints = 1800; // Maximum number of points

  useEffect(() => {
    // Gradually increase the number of points over time
    const interval = setInterval(() => {
      if (numPointsToShow < maxPoints) {
        setNumPointsToShow(numPointsToShow + 20);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [numPointsToShow]);

  return (
    <div className={styles.canvas}>
      <Canvas
        camera={{
          position: [-50, 7.5, -65],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls
          enableZoom={false}
          maxDistance={20}
          minDistance={10}
          autoRotate={false}
        />

        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle numPointsToShow={numPointsToShow} />
      </Canvas>

      <Hero />
    </div>
  );
};

const PointCircle = ({ numPointsToShow }) => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = -clock.getElapsedTime() * 0.05; // Change the sign here
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.slice(0, numPointsToShow).map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.slice(0, numPointsToShow / 4).map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;

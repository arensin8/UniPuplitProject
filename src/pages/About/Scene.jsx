/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
Title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");

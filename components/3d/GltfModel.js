import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import meshData from "./meshData";

const GltfModel = ({
  model,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationAxes = [],
}) => {
  const ref = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/" + model + ".glb"
  );

  // Subscribe this component to the render-loop, rotate the mesh every frame
  rotationAxes.indexOf("x") != -1 && useFrame((state, delta) => (ref.current.rotation.x += 0.003));
  rotationAxes.indexOf("y") != -1 && useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  rotationAxes.indexOf("z") != -1 && useFrame((state, delta) => (ref.current.rotation.z += 0.003));

  return (
    <>
      <group ref={ref} dispose={null} scale={scale}>
        <mesh
          castShadow
          receiveShadow
          position={position}
          rotation={rotation}
          {...meshData[model](nodes, materials)}
        />
      </group>
    </>
  );
};

export default GltfModel;

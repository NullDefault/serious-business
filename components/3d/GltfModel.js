import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import meshData from "./meshData";

const GltfModel = ({
  model,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationAxis = "y",
}) => {
  const ref = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/" + model + ".glb"
  );

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation[rotationAxis] += 0.003));

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

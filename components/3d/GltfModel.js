import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  enableHoverEnlarge = true,
  rotationAxis = "y",
}) => {
  const ref = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation[rotationAxis] += 0.003));

  const hoverSettings = enableHoverEnlarge
    ? {
        scale: hovered ? scale * 1.2 : scale,
        onPointerOver: (event) => hover(true),
        onPointerOut: (event) => hover(false),
      }
    : {
        scale: scale,
      };

  return (
    <>
      <group ref={ref} dispose={null} scale={scale}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["10680_Dog_v2"].geometry}
          material={materials._10680_Dog_v2default}
          position={position}
          rotation={rotation}
        />
      </group>
    </>
  );
};

export default GltfModel;

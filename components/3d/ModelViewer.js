import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({
  model,
  scale = 40,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  enableHoverEnlarge = false,
  enableOrbitControls = false,
  rotationAxis = "y",
}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel
          model={model}
          scale={scale}
          position={position}
          rotation={rotation}
          enableHoverEnlarge={enableHoverEnlarge}
          rotationAxis={rotationAxis}
        />
        {enableOrbitControls && <OrbitControls />}
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;

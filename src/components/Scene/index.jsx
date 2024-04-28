"use client";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CollarHead from "../CollarHead";

const Scene = () => {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 2],
        left: -2,
        right: 2,
        top: 2,
        bottom: -2,
        zoom: 500,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={4} />
        <CollarHead position={[-1.2, 0, -1]} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";

const TorusCanvas = ({ children }) => {
  return (
    <>
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 0],
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
          zoom: 100,
        }}
      >
        {children}
      </Canvas>
    </>
  );
};

export default TorusCanvas;

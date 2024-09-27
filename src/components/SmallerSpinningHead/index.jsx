"use client";
import React, { Suspense, useRef, useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import SmallerCollarHead from "../SmallerCollarHead";
import {
  Environment,
  Text,
  ScreenSizer,
  Sphere,
  Html,
} from "@react-three/drei";
import { Flex, Box, useReflow } from "@react-three/flex";
import { DoubleSide } from "three";

const SmallerSpinningHead = () => {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 1],
        left: -2,
        right: 2,
        top: 2,
        bottom: -2,
        zoom: 800,
      }}
      className="relative  w-1/2"
    >
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />

      <SmallerCollarHead position={[-0.1, 0.1, -3]} scalingFactor={0.1} />
    </Canvas>
  );
};

export default SmallerSpinningHead;

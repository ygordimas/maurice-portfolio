"use client";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { TorusKnotModel } from "./TorusKnot";
import { useFrame } from "@react-three/fiber";
import CollarHead from "../CollarHead";

const SpinningTorus = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ambientLight intensity={4} />
        <CollarHead position={[-1.2, 0, -1]} />
        {/* <TorusKnotModel position={[0, 0, -1.8]} /> */}
      </Suspense>
    </>
  );
};

export default SpinningTorus;

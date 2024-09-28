"use client";
import React, { Suspense, useRef, useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import CollarHead from "../CollarHead";
import Head from "../Head";
import {
  Environment,
  Text,
  ScreenSizer,
  Sphere,
  Html,
} from "@react-three/drei";
import { Flex, Box, useReflow } from "@react-three/flex";
import { DoubleSide } from "three";

const Layout = () => {
  const { viewport, size } = useThree();
  const fontSize = 1;
  const letterSpacing = 0.05;

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      position={[-viewport.width / 2, viewport.height / 2 - 2, -3]}
      size={[viewport.width / 2, viewport.height / 2, 0]}
      paddingLeft={1}
      paddingRight={1}
      className="bg-red-500"
    >
      <Box alignSelf="center" centerAnchor pl={10}>
        <Text
          font="localfonts/BebasNeue-Regular.ttf"
          fontSize={fontSize}
          textAlign="center"
          characters="abcdefghijklmnopqrstuvwxyz012fontSize456789!"
          letterSpacing={letterSpacing}
        >
          <meshBasicMaterial
            attach="material"
            color="#FFFFFF"
            toneMapped={false}
          />
          Maurice
        </Text>
      </Box>
      <Box alignSelf="center" centerAnchor pr={10}>
        <Text
          font="localfonts/BebasNeue-Regular.ttf"
          fontSize={fontSize}
          textAlign="center"
          characters="abcdefghijklmnopqrstuvwxyz0123456789!"
          letterSpacing={letterSpacing}
        >
          <meshBasicMaterial
            attach="material"
            color="#FFFFFF"
            toneMapped={false}
          />
          Quandus
        </Text>
      </Box>
    </Flex>
  );
};

const Scene = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 8],
        left: -2,
        right: 2,
        top: 2,
        bottom: -2,
        zoom: 100,
      }}
      className="relative bg-gray-200"
    >
      {/* <directionalLight intensity={0} position={[0, 1, 5]} /> */}
      <Environment preset="city" />

      {/* <Layout /> */}
      <Head
        position={[isMobile ? -0.05 : 0, 0, 0]}
        scalingFactor={isMobile ? 1.5 : 1}
      />
    </Canvas>
  );
};

export default Scene;

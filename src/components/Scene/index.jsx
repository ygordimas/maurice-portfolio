"use client";
import React, { Suspense, useRef, useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import CollarHead from "../CollarHead";
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
      position={[-viewport.width / 2, viewport.height / 2, -3]}
      size={[viewport.width, viewport.height, 0]}
      paddingLeft={1}
      paddingRight={1}
    >
      <Box alignSelf="flex-start" centerAnchor pl={10}>
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
      <Box alignSelf="flex-end" centerAnchor pr={10}>
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
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 10],
        left: -2,
        right: 2,
        top: 2,
        bottom: -2,
        zoom: 100,
      }}
      className="relative"
    >
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />

      <Layout />
      <CollarHead position={[-4.2, 0, 0]} scalingFactor={4} />
    </Canvas>
  );
};

export default Scene;

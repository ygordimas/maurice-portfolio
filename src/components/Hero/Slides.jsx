"use client";
import { useRef } from "react";
import { Image as DImage, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, MathUtils } from "three";

function DreiImage(props) {
  const ref = useRef(null);
  const group = useRef(null);
  const data = useScroll();

  useFrame((state, delta) => {
    if (group.current && ref.current && data) {
      group.current.position.z = MathUtils.damp(
        group.current.position.z,
        Math.max(0, data.delta * 100),
        4,
        delta
      );
      ref.current.material.grayscale = MathUtils.damp(
        ref.current.material.grayscale,
        Math.max(0, 1 - data.delta * 1000),
        4,
        delta
      );
    }
  });

  return (
    <group ref={group}>
      <DImage ref={ref} {...props} />
    </group>
  );
}

function Slide({ urls = [""], ...props }) {
  const ref = useRef(null);
  const { width } = useThree((state) => state.viewport);
  // const w = width < 10 ? 1.5 / 3 : 1 / 3;
  const w = width < 10 ? 1.5 / 2 : 1 / 2;
  return (
    <group {...props}>
      <DreiImage position={[-width * w, 0, 0]} scale={[5, 7]} url={urls[0]} />
      <DreiImage position={[0, 0, 0]} scale={[5, 7]} url={urls[1]} />
      <DreiImage position={[width * w, 0, 1]} scale={[5, 7]} url={urls[2]} />
    </group>
  );
}

function Slides() {
  const { width } = useThree((state) => state.viewport);

  return (
    <>
      <Slide
        position={[0, 0, 0]}
        urls={[
          "/images/2/AFF5D406-F78E-4486-AE7D-CC982E1C05CD.jpeg",
          "/images/2/FA145D4A-BCF0-481E-9FBD-D47B63B0B3E4.jpeg",
          "/images/2/Lizard-2_VSCO.jpeg",
        ]}
      />
      <Slide
        position={[width * 1, 0, 0]}
        urls={[
          "/images/2/IMG_0176.jpeg",
          "/images/2/IMG_0180.jpeg",
          "/images/2/IMG_7641.jpeg",
        ]}
      />
      {/* <Slide
        position={[width * 1, 0, 0]}
        urls={[
          "/images/IMG_7644.jpeg",
          "/images/IMG_7645.jpeg",
          "/images/IMG_7646.jpeg",
        ]}
      />
      <Slide
        position={[width * 2, 0, 0]}
        urls={[
          "/images/IMG_7641.jpeg",
          "/images/IMG_7642.jpeg",
          "/images/IMG_7643.jpeg",
        ]}
      /> */}
    </>
  );
}

export default Slides;

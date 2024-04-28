import React, { useRef } from "react";
import { useEnvironment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CollarHead = (props) => {
  const { nodes, materials } = useGLTF("/Collar.glb");

  const cubeMap = () => {
    let cubeArray = [];

    for (let i = 0; i < 6; i++) {
      cubeArray[i] = "/lines.png";
    }

    return cubeArray;
  };

  const envMap = useEnvironment({ files: cubeMap() });

  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.4;
    // ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    // ref.current.rotation.z = clock.getElapsedTime() * 0.1;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.BézierCurve.geometry}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshPhongMaterial
          attach="material"
          color="white"
          envMap={envMap}
          shininess={100}
          specular={"FFFFFFFF"}
          refractionRatio={1}
          precision="highp"
          dithering="true"
          //   flatShading
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/Collar.glb");

export default CollarHead;

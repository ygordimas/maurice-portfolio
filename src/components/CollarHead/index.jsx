import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useEnvironment,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const CollarHead = (props) => {
  const { nodes, materials } = useGLTF("/Collar.glb");
  const { scalingFactor } = { ...props };

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  const transmissionProps = {
    thickness: 0.1,
    roughness: 0.1,
    transmission: 0.7,
    ior: 0.7,
    chromaticAberration: 0.14,
    backside: true,
  };

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
    ref.current.rotation.x = clock.getElapsedTime() * 0.3;
    // ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    // ref.current.rotation.z = clock.getElapsedTime() * 0.3;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.BézierCurve.geometry}
        rotation={[0, 0, Math.PI / 2]}
        scale={[scalingFactor, scalingFactor, scalingFactor]}
      >
        {/* <meshPhongMaterial
          attach="material"
          color="white"
          envMap={envMap}
          shininess={100}
          specular={"FFFFFFFF"}
          refractionRatio={1}
          precision="highp"
          dithering="true"
          //   flatShading
        /> */}
        <MeshTransmissionMaterial {...transmissionProps} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/Collar.glb");

export default CollarHead;

import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useEnvironment,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const CollarHead = (props) => {
  const { nodes, materials } = useGLTF("/Collar.glb");
  const { scalingFactor } = { ...props };
  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;

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
    ref.current.rotation.x = clock.getElapsedTime() * 0.75;
    // ref.current.rotation.y = clock.getElapsedTime() * 0.4;
    // ref.current.rotation.z = clock.getElapsedTime() * 0.3;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.BézierCurve.geometry}
        rotation={[0, 0, Math.PI / 2]}
        scale={[
          scalingFactor * responsiveRatio,
          scalingFactor * responsiveRatio,
          scalingFactor * responsiveRatio,
        ]}
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

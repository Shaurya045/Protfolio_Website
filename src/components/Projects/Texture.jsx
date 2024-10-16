import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Texture() {
  const tex = useTexture("./portfolio_project3d1.png");
  const cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.2]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 30, true]} />
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Texture;

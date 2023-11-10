import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { themeData } from "../../statics/theme";
import { useTheme } from "../../context/ThemeContext";

function Circle(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.z += delta * 0.6));
  useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.6));
  const { theme } = useTheme();

  return (
    <>
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 0.5 : 0.3}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <ambientLight intensity={3} />
        <coneGeometry args={[3, 10, 28]} />
        <meshStandardMaterial
          displacementScale={0.2}
          transparent
          attach="material"
          color={hovered ? themeData[theme].boxHover : themeData[theme].box}
        />
      </mesh>
    </>
  );
}

export default Circle;

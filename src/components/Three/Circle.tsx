import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Circle(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  const colorMap = useLoader(TextureLoader, "/earth.jpg");

  return (
    <>
      <spotLight args={["#000", 1, 10, 10]} />
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 0.5 : 0.3}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        {/* <directionalLight /> */}

        <ambientLight intensity={1} />
        <sphereGeometry args={[3, 32, 16]} />
        {/* <torusKnotGeometry args={[1, 0.4, 64, 8, 2, 3]} /> */}
        <meshStandardMaterial
          // color={hovered ? "rgb(12, 74, 110)" : "pink"}
          displacementScale={0.2}
          transparent
          attach="material"
          roughness={0}
          map={colorMap}
        />
      </mesh>
    </>
  );
}

export default Circle;

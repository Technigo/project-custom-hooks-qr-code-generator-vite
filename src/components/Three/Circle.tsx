import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Circle(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  const colorMap = useLoader(TextureLoader, "/earth.jpg");

  return (
    <>
      <spotLight args={["#ffffff", 10, 1000, 50]} />
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 0.5 : 0.3}
        onClick={(event) => setActive(!active)}
      >
        <ambientLight intensity={1} />
        <sphereGeometry args={[3, 32, 16]} />
        <meshStandardMaterial
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

import React from "react";
import { Canvas } from "@react-three/fiber";
import Three from "./Box.js";
import { createRoot } from "react-dom/client";
import { useControls } from "leva";

export default function CanvasComp({ children }: any) {
  const { roughness } = useControls({ roughness: { value: 1, min: 0, max: 1 } });
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 5, 25]} />
      <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
      {children}
      {/* <Three position={[-1.2, 0, 0]} /> */}
      {/* <Three position={[2, 0, 0]} /> */}
      {/* <mesh
        visible
        userData={{ hello: "world" }}
        position={[1, 2, 3]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh> */}

      {/* <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={roughness} />
      </mesh> */}
    </Canvas>
  );
}

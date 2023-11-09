import React from "react";
import { Canvas } from "@react-three/fiber";

export default function CanvasComp({ children }: any) {
  return (
    <Canvas className="w-full h-full">
      <ambientLight />
      <pointLight position={[10, 5, 25]} />
      {children}
    </Canvas>
  );
}

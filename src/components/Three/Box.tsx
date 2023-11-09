import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { themeData } from "../../statics/theme";
import { useTheme } from "../../context/ThemeContext";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  const { theme } = useTheme();

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 2.5 : 2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1.2, 1.2]} />
      <meshStandardMaterial color={hovered ? themeData[theme].boxHover : themeData[theme].box} />
    </mesh>
  );
}

export default Box;

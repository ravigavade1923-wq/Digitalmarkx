import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function Globe() {
  const texture = useMemo(() => {
    return new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/earth_atmos_2048.jpg",
    );
  }, []);

  return (
    <div className="globe-container">
      <Canvas dpr={[1, 1.5]}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        <Sphere args={[2, 32, 32]}>
          <meshStandardMaterial map={texture} />
        </Sphere>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}

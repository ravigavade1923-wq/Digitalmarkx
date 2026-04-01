import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Globe() {
  return (
    <div className="globe-container">
      <Canvas>
        
        {/* LIGHTING */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        {/* EARTH SPHERE */}
        <Sphere args={[2, 64, 64]}>
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(
              "https://threejs.org/examples/textures/earth_atmos_2048.jpg"
            )}
          />
        </Sphere>

        {/* CONTROLS */}
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />
        
      </Canvas>
    </div>
  );
}
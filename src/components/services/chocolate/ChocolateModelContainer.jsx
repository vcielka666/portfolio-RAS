import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Chocolate } from "./Chocolate";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ChocolateModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={1}>
          {/* Chocolate model rotated 90 degrees vertically (X-axis) and 180 degrees horizontally (Y-axis) */}
          <Chocolate rotation={[Math.PI / 2, Math.PI, 0]} />
        </Stage>
        {/* Enable camera controls and auto rotation */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        {/* Camera setup */}
        <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ChocolateModelContainer;

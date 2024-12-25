import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Weed } from "./Weed";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const WeedModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={1}>
          {/* Rotate Weed model 180 degrees vertically (X-axis) */}
          <Weed rotation={[Math.PI, 0, 0]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <PerspectiveCamera position={[0, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default WeedModelContainer;

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Weed } from "./Weed";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const WeedModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={1}>
          <Weed />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default WeedModelContainer;

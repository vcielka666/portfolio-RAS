import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MapModel } from "./MapModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MapModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="sunset" intensity={0.5}>
          <MapModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MapModelContainer;

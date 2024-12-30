import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shape from "./Shape";

const SunEffect = () => {
  return (
    <div className="sunEffect">
      {/* Sunshine background */}
      <div className="sunshine"></div>

      {/* 3D Shape */}
      <Canvas>
        <Suspense fallback="loading...">
          <Shape />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SunEffect;

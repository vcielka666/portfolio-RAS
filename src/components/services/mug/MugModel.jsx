import { useGLTF } from "@react-three/drei";

export function Chocolate(props) {
  const { scene } = useGLTF("/chocolate.glb"); // Simplified to load the full scene
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/chocolate.glb");

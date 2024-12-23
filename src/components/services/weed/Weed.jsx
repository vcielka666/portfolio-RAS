import { useGLTF } from "@react-three/drei";

export function Weed(props) {
  const { scene } = useGLTF("/weed.glb"); // Ensure this path is correct
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/weed.glb");

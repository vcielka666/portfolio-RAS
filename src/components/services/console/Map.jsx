import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/map.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 3.637, -3.653]} rotation={[-0.004, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['map001_01_-_Map_0'].geometry} material={materials['01_-_Map']} rotation={[-Math.PI / 2, 0, 0]} scale={[1.038, 1.038, 1]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/map.glb')

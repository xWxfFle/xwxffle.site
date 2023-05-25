/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { editable as e } from '@theatre/r3f'


type GLTFResult = GLTF & {
  nodes: {
    Sphere018: THREE.Mesh
    Sphere018_1: THREE.Mesh
  }
  materials: {
    ['Orange.008']: THREE.MeshStandardMaterial
    GreenDark: THREE.MeshStandardMaterial
  }
}

export function Pumpkin(props: JSX.IntrinsicElements['group'] & { theatreKey: string }) {
  const { nodes, materials } = useGLTF('/pumpkin.gltf') as GLTFResult
  return (
    <e.group {...props} dispose={null}>
      <group position={[0, 1.21, 0]} scale={1.5}>
        <mesh castShadow receiveShadow geometry={nodes.Sphere018.geometry} material={materials['Orange.008']} />
        <mesh castShadow receiveShadow geometry={nodes.Sphere018_1.geometry} material={materials.GreenDark} />
      </group>
    </e.group>
  )
}

useGLTF.preload('/pumpkin.gltf')

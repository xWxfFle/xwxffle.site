/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cup: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
    ['default']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cup.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cup.geometry} material={materials['default']}>
        <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['default']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/cup.gltf')

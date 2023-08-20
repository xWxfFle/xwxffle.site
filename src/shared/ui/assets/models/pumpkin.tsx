'use client'

/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

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

export const Pumpkin = (
  props: JSX.IntrinsicElements['group'] & { theatreKey: string },
) => {
  const { nodes, materials } = useGLTF('/models/pumpkin.gltf') as GLTFResult
  return (
    <e.group {...props} dispose={null}>
      <group position={[0, 1.21, 0]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere018.geometry}
          material={materials['Orange.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere018_1.geometry}
          material={materials.GreenDark}
        />
      </group>
    </e.group>
  )
}

useGLTF.preload('/models/pumpkin.gltf')

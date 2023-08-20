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
    rocksA_forest: THREE.Mesh
  }
  materials: {
    ['Stone.007']: THREE.MeshStandardMaterial
  }
}

export const Stones = (
  props: JSX.IntrinsicElements['group'] & { theatreKey: string },
) => {
  const { nodes, materials } = useGLTF('/models/stones.gltf') as GLTFResult
  return (
    <e.group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rocksA_forest.geometry}
        material={materials['Stone.007']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </e.group>
  )
}

useGLTF.preload('/models/stones.gltf')

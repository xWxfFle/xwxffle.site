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
    ['tree-spruce']: THREE.Mesh
  }
  materials: {
    color_main: THREE.MeshStandardMaterial
  }
}

export function Tree(props: JSX.IntrinsicElements['group'] & { theatreKey: string }) {
  const { nodes, materials } = useGLTF('/tree.gltf') as GLTFResult
  return (
    <e.group {...props} dispose={null} theatreKey={props.theatreKey}>
      <mesh castShadow receiveShadow geometry={nodes['tree-spruce'].geometry} material={materials.color_main} />
    </e.group>
  )
}

useGLTF.preload('/tree.gltf')

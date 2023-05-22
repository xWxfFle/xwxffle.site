/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { editable as e } from '@theatre/r3f'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
  };
  materials: {
    ["Metal.004"]: THREE.MeshStandardMaterial;
    ["BrownDark.006"]: THREE.MeshStandardMaterial;
    ["Blue.003"]: THREE.MeshStandardMaterial;
  };
};

export function Arrow(props: JSX.IntrinsicElements['group'] & { theatreKey: string }) {
  const { nodes, materials } = useGLTF('/arrow.gltf') as GLTFResult
  return (
    <e.group {...props} dispose={null} theatreKey={ props.theatreKey}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001.geometry} material={materials['Metal.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_1.geometry} material={materials['BrownDark.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_2.geometry} material={materials['Blue.003']} />
      </group>
    </e.group>
  )
}

useGLTF.preload("/arrow.gltf");
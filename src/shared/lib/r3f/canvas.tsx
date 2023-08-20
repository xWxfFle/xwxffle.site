import { Preload } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import tunnel from 'tunnel-rat'

export const r3f = tunnel()

const Canvas = ({ ...props }) => {
  return (
    <ThreeCanvas {...props}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </ThreeCanvas>
  )
}

export default Canvas

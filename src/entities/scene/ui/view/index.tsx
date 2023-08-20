/* eslint-disable react/no-unknown-property */
'use client'
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  Suspense,
  useImperativeHandle,
  useRef,
} from 'react'
import { r3f } from '@/shared/lib/r3f'

export const Common = ({
  color,
  position,
  fov,
}: {
  color?: string
  fov: number
  position: Vector3
}) => {
  return (
    <Suspense fallback={null}>
      {color && <color attach="background" args={[color]} />}
      <ambientLight intensity={1.5} />
      <pointLight position={[2, 3, 1]} intensity={5.6} />
      <pointLight position={[-1, 2, -1]} intensity={5.4} />
      <PerspectiveCamera makeDefault fov={fov} position={position} />
    </Suspense>
  )
}

const View = forwardRef(
  (
    {
      children,
      orbit,
      ...props
    }: PropsWithChildren<{ orbit?: boolean; className?: string }>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const localRef = useRef<HTMLDivElement>(null!)
    useImperativeHandle(ref, () => localRef.current)

    return (
      <>
        <div ref={localRef} {...props} />
        <r3f.In>
          <ViewImpl track={localRef}>
            {children}
            {orbit && <OrbitControls enablePan={false} autoRotate />}
          </ViewImpl>
        </r3f.In>
      </>
    )
  },
)
View.displayName = 'View'

export { View }

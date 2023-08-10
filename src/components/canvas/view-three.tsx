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
import { Three } from '@/helpers/components/Three'

export const Common = ({
  color,
  position,
}: {
  color?: string
  position?: Vector3
}) => {
  return (
    <Suspense fallback={null}>
      {color && <color attach="background" args={[color]} />}
      <ambientLight intensity={1.5} />
      <pointLight position={[2, 3, 1]} intensity={5.6} />
      <pointLight position={[-1, 2, -1]} intensity={5.4} />
      <PerspectiveCamera
        makeDefault
        fov={60}
        position={position ? position : [1, 2, 6]}
      />
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
        <Three>
          <ViewImpl track={localRef}>
            {children}
            {orbit && <OrbitControls enablePan={false} autoRotate />}
          </ViewImpl>
        </Three>
      </>
    )
  },
)
View.displayName = 'View'

export { View }

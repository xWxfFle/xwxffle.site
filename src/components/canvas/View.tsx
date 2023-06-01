'use client'
import { ForwardedRef, forwardRef, PropsWithChildren, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { Vector3 } from '@react-three/fiber'

export const Common = ({ color, position }: { color?: string; position?: Vector3 }) => {
  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={0.6} />
      <pointLight position={[-10, 20, -10]} intensity={0.4} />
      <PerspectiveCamera makeDefault fov={60} position={position ? position : [1, 2, 6]} />
    </Suspense>
  )
}

const View = forwardRef(
  (
    { children, orbit, ...props }: PropsWithChildren<{ orbit?: boolean; className?: string }>,
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

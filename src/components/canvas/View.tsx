'use client'

import { ForwardedRef, forwardRef, PropsWithChildren, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color }: { color?: string }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <PerspectiveCamera makeDefault fov={60} position={[1, 1, 6]} />
  </Suspense>
)


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
            {orbit && <OrbitControls />}
          </ViewImpl>
        </Three>
      </>
    )
  },
)
View.displayName = 'View'

export { View }

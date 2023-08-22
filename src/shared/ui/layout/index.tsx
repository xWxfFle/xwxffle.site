'use client'

import dynamic from 'next/dynamic'
import { PropsWithChildren, useRef } from 'react'

type Props = PropsWithChildren

const Canvas = dynamic(() => import('@/shared/lib/r3f/canvas'), {
  ssr: false,
})

export const Layout = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  )
}

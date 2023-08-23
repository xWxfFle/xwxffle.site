'use client'

import Lenis from '@studio-freight/lenis'
import dynamic from 'next/dynamic'
import { PropsWithChildren, useEffect, useRef } from 'react'

type Props = PropsWithChildren

const Canvas = dynamic(() => import('@/shared/lib/r3f/canvas'), {
  ssr: false,
})

export const Layout = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
      }}
    >
      {children}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { Scene } from '@/entities/scene'

const LandingScene = dynamic(
  () => import('./ui/landing-scene').then((mod) => mod.LandingScene),
  {
    ssr: false,
  },
)

export const Landing = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-1/3 items-end">
        <div className=" hero-content w-full flex-col items-start justify-center">
          <h3 className="text-xl uppercase">Hello, my name is</h3>
          <h1 className="mb-4 text-5xl font-bold">Arseniy Filatov</h1>
          <a
            href="#footer"
            className="btn-secondary btn-wide btn shadow-xl font-bold"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="h-2/3 w-full">
        <Scene fov={37} position={[0.8, 1.2, 6.4]}>
          <LandingScene />
        </Scene>
      </div>
    </div>
  )
}

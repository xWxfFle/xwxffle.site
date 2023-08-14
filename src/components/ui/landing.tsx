'use client'
import dynamic from 'next/dynamic'
import { Loading } from './loading'

const Common = dynamic(
  () => import('@/components/canvas/view-three').then((mod) => mod.Common),
  { ssr: false },
)
const LandingScene = dynamic(
  () => import('@/components/canvas/assets').then((mod) => mod.LandingScene),
  {
    ssr: false,
  },
)
const View = dynamic(
  () => import('@/components/canvas/view-three').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <Loading />,
  },
)

export const Landing = () => {
  return (
    <>
      <div className="hero h-1/2 lg:h-1/3 items-end">
        <div className=" hero-content w-full flex-col items-start justify-center">
          <h3 className="text-xl uppercase">Hello, my name is</h3>
          <h1 className="mb-4 text-5xl font-bold">Arseniy Filatov</h1>
          <h2 className="text-2xl leading-normal">
            And I`m a frontend developer
          </h2>
          <a
            href="#footer"
            className="btn-secondary btn-wide btn shadow-xl font-bold"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="h-1/2 lg:h-2/3 w-full">
        <View className="flex h-full w-full flex-col items-center justify-center">
          <LandingScene />
          <Common fov={35} />
        </View>
      </div>
    </>
  )
}

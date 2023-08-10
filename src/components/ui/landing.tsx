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
      <div className="hero absolute top-0">
        <div className=" hero-content w-full flex-col items-start justify-center md:mt-40 ">
          <h3 className="text-xl uppercase">Hello, my name is</h3>
          <h1 className="mb-4 text-5xl font-bold">Arseniy Filatov</h1>
          <h2 className="text-2xl leading-normal">
            And I`m a frontend developer
          </h2>
          <a href="#footer" className="btn-secondary btn-wide btn  shadow-xl">
            Contact me
          </a>
        </div>
      </div>
      <View className="flex h-screen w-full flex-col items-center justify-center">
        <LandingScene />
        <Common />
      </View>
    </>
  )
}

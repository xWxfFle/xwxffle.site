'use client'

import { Loading } from '@/components/canvas/Loading'
import dynamic from 'next/dynamic'

const Intro = dynamic(() => import('@/components/canvas/Intro').then((mod) => mod.Intro), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='hero absolute top-0'>
        <div className=' hero-content w-full flex-col items-start justify-center md:mt-40 '>
          <p className='w-full text-xl uppercase'>Hello my name is</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Arseniy Filatov</h1>
          <p className='mb-8 text-2xl leading-normal'>
            I`m 17 years old creative frontend developer. I really like React and Three.js
          </p>
        </div>
      </div>
      <View className='flex h-screen w-full flex-col items-center justify-center'>
        <Intro />
        <Common />
      </View>
      <div className=' mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Next + React Three Fiber</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Hello, I`m Arseniy</h1>
          <p className='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>
      </div>
    </>
  )
}

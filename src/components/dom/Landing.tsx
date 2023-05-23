'use client'
import dynamic from 'next/dynamic'
import { Loading } from '../canvas/Loading'

const Preview = dynamic(() => import('@/components/canvas/Preview').then((mod) => mod.Preview), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export function Landing() {
  return (
    <>
      <div className='hero absolute top-0'>
        <div className=' hero-content w-full flex-col items-start justify-center md:mt-40 '>
          <h2 className='text-xl uppercase'>Hello, my name is</h2>
          <h1 className='mb-4 text-5xl font-bold'>Arseniy Filatov</h1>
          <h3 className='text-2xl leading-normal'>
            But my friends call me <span className=' underline'>Ars</span> for short.
          </h3>
        </div>
      </div>
      <View className='flex h-screen w-full flex-col items-center justify-center'>
        <Preview />
        <Common />
      </View>
    </>
  )
}

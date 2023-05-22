'use client'
import { Loading } from '@/components/canvas/Loading'
import dynamic from 'next/dynamic'

const Preview = dynamic(() => import('@/components/canvas/Preview').then((mod) => mod.Preview), { ssr: false })
const LogoReact = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logof), { ssr: false })
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
          <p className='w-full text-xl uppercase'>Hello, my name is</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Arseniy Filatov</h1>
          <p className='mb-8 text-2xl leading-normal'>
            But my friends call me <span className=' underline'>Senya</span> for short.
          </p>
        </div>
      </div>
      <View className='flex h-screen w-full flex-col items-center justify-center'>
        <Preview />
        <Common />
      </View>

      <div className='mx-auto flex w-full flex-col flex-wrap items-center justify-center bg-base-200 md:flex-row'>
        {' '}
        <div className=' h-96 w-full p-12 py-6 sm:w-1/4 md:my-12 md:mb-40'>
          <p className='text-xl uppercase'>01</p>
          <h2 className='my-4 text-4xl font-bold leading-tight'>About me</h2>
          <p className='mb-8 text-2xl leading-normal'>
            I`m a 17 y.o. creative frontend developer from Rostov-on-Don, Russia
          </p>
        </div>
        <div className=' my-12 h-96 w-full py-6 sm:w-1/4 md:mb-40  md:p-12'>
          <View className='h-full  sm:h-96 sm:w-full'>
            <LogoReact />
            <Common />
          </View>
        </div>
      </div>
    </>
  )
}

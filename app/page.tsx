'use client'
import { Loading } from '@/components/canvas/Loading'
import dynamic from 'next/dynamic'

const Preview = dynamic(() => import('@/components/canvas/Preview').then((mod) => mod.Preview), { ssr: false })
const ReactLogo = dynamic(() => import('@/components/canvas/assets/ReactLogo').then((mod) => mod.ReactLogo), {
  ssr: false,
})
const NodeLogo = dynamic(() => import('@/components/canvas/assets/NodeLogo').then((mod) => mod.NodeLogo), {
  ssr: false,
})
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

      <div className='mx-auto flex w-full flex-col flex-wrap items-center justify-center bg-base-300 md:flex-row'>
        <div className=' h-full w-full p-12 py-6 md:my-12 md:mb-40 lg:w-2/6'>
          <p className='text-xl uppercase'>01</p>
          <h2 className='my-4 text-4xl font-bold leading-tight'>About me</h2>
          <p className='mb-4 text-lg leading-normal'>
            I`m a 17 y.o. creative frontend developer from Rostov-on-Don, Russia.
          </p>
          <p className='mb-4 text-lg leading-normal'>
            In 2021 I started my career as a <span className='text-info'>Node.js</span> trainee developer at a
            blockchain company. I continued to improve my skills and became interested in frontend.
          </p>
          <p className='mb-4 text-lg leading-normal'>
            For the year 2022, I have mastered <span className='text-info'>React</span> and{' '}
            <span className='text-info'>Next.js</span> and other libraries. Also, I like to develop WebGL applications
            using <span className='text-info'>Three.js</span> with <span className='text-info'>React Three Fiber</span>.
          </p>
        </div>
        <div className=' mb-12  h-48 w-full py-6 md:mb-40 md:h-96 md:p-12  lg:w-2/6'>
          <View className='h-full w-full'>
            <ReactLogo />
            <Common />
          </View>
        </div>
      </div>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center justify-center bg-base-300 md:flex-row-reverse'>
        <div className=' h-full w-full p-12 py-6 md:my-12 md:mb-40 lg:w-2/6'>
          <p className='text-xl uppercase'>02</p>
          <h2 className='my-4 text-4xl font-bold leading-tight'>My skills</h2>

          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 border border-base-300 bg-base-200'>
            <div className='collapse-title text-xl font-medium'>HTML</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 border border-base-300 bg-base-200'>
            <div className='collapse-title text-xl font-medium'>CSS</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>

          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 border border-base-300 bg-base-200'>
            <div className='collapse-title text-xl font-medium'>JavaScript</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>

          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 border border-base-300 bg-base-200'>
            <div className='collapse-title text-xl font-medium'>Other</div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </div>
        <div className=' mb-12 h-48 w-full py-6 md:mb-40 md:h-96 md:p-12  lg:w-2/6'>
          <View className='h-full w-full'>
            <NodeLogo />
            <Common />
          </View>
        </div>
      </div>
    </>
  )
}

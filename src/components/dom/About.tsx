'use client'
import { Loading } from '@/components/canvas/Loading'
import dynamic from 'next/dynamic'
import { Keyboard } from '../canvas/assets/Keyboard'

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

export function About() {
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-start justify-center bg-base-200 md:flex-row'>
        <div className=' h-full w-full p-6 text-xl md:my-12 md:mb-40 lg:w-2/6'>
          <p className='mb-4 font-rammeto text-xl uppercase'>01</p>
          <h2 className='mb-4 text-4xl font-bold leading-tight'>About me</h2>
          <p className='mb-8  leading-normal'>
            I`m a 17 y.o. react frontend developer from Rostov-on-Don, Russia with a year of commercial experience. I
            started my career in 2021 as a trainee <span className='text-info'>Node.js</span> developer for a company
            working on blockchain apps. After realizing my interest was mostly in frontend development, I shifted my
            focus and began mastering <span className='text-info'>React</span> and{' '}
            <span className='text-info'>TypeScript</span> in 2022. These days I use{' '}
            <span className='text-info'>Next.js</span> for project development and also enjoy creating WebGL
            applications using <span className='text-info'>Three.js</span> and{' '}
            <span className='text-info'>React Three Fiber</span>.
          </p>
        </div>
        <div className='h-96 w-full px-6 md:my-12  lg:w-2/6'>
          <View className='rounded-box h-full w-full bg-base-200'>
            <ReactLogo />
            <Common position={[0, 0, 5]} />
          </View>
        </div>
      </div>

      <div className='mx-auto flex w-full flex-col flex-wrap items-start justify-center bg-base-200 md:flex-row-reverse'>
        <div className=' h-full w-full p-6 md:my-12 md:mb-40 lg:w-2/6'>
          <p className=' mb-4 font-rammeto text-xl uppercase'>02</p>
          <h2 className='mb-4 text-4xl font-bold leading-tight'>My skills</h2>

          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4  bg-base-300'>
            <div className='collapse-title inline-flex items-center text-xl'>
              <h3>HTML</h3>
            </div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 bg-base-300'>
            <div className='collapse-title inline-flex items-center text-xl'>
              <h3>CSS</h3>
            </div>
            <div className='collapse-content'>
              <p className='text-lg'>Preprocessors</p>
              <p className='text-base font-thin'>Preprocessors</p>
            </div>
          </div>

          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4  bg-base-300'>
            <div className='collapse-title inline-flex items-center text-xl'>
              <h3>JavaScript</h3>
            </div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>

          <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 bg-base-300'>
            <div className='collapse-title inline-flex items-center text-xl'>
              <h3>Other</h3>
            </div>
            <div className='collapse-content'>
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
        </div>
        <div className=' mb-12 h-96  w-full px-6 md:my-12 lg:w-2/6'>
          <View className='h-full w-full rounded-lg bg-base-300'>
            <NodeLogo />
            <Common />
          </View>
        </div>
      </div>
    </>
  )
}

'use client'
import { ReactLogoScene } from '../canvas/AboutScene'

export function About() {
  return (
    <div className='mx-auto flex w-full flex-col flex-wrap items-start justify-center bg-base-200 md:flex-row'>
      <div className=' h-full w-full p-6 text-xl md:my-12 md:mb-40 lg:w-2/6'>
        <p className='mb-4 font-rammeto text-xl uppercase'>01</p>
        <h2 className='mb-4 text-4xl font-bold leading-tight'>About me</h2>
        <p className='mb-8  leading-normal'>
          I`m a 17 y.o. react frontend developer from Rostov-on-Don, Russia with a year of commercial experience. I
          started my career in 2021 as a trainee <span className='text-info'>Node.js</span> developer for a company
          working on blockchain apps. After realizing my interest was mostly in frontend development, I shifted my focus
          and began mastering <span className='text-info'>React</span> and <span className='text-info'>TypeScript</span>{' '}
          in 2022. These days I use <span className='text-info'>Next.js</span> for project development and also enjoy
          creating WebGL applications using <span className='text-info'>Three.js</span> and{' '}
          <span className='text-info'>React Three Fiber</span>.
        </p>
      </div>
      <div className='h-96 w-full px-6 md:my-12  lg:w-2/6'>
        <ReactLogoScene />
      </div>
    </div>
  )
}

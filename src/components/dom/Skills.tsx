'use client'
import { SkillScene } from '../canvas/SkillScene'

export const Skills = () => {
  return (
    <div className='mx-auto flex w-full flex-col flex-wrap items-start justify-center bg-base-200 md:flex-row-reverse'>
      <div className=' h-full w-full p-6 md:my-12 md:mb-40 lg:w-2/6'>
        <p className=' mb-4 font-rammeto text-xl uppercase'>02</p>
        <h2 className='mb-4 text-4xl font-bold leading-tight'>My skills</h2>

        <div tabIndex={0} className='collapse-plus rounded-box collapse my-4  bg-base-100  shadow-xl'>
          <div className='collapse-title inline-flex items-center text-xl'>
            <h2>HTML / CSS</h2>
          </div>
          <div className='collapse-content'>
            <p className='text-2xl font-bold'>Preprocessors</p>
            <p className='mb-4 text-xl'>Sass/Scss, PostCSS</p>
            <p className='text-2xl font-bold'>Frameworks</p>
            <p className='mb-4 text-xl'>Tailwind</p>
            <p className='text-2xl font-bold'>UI libraries</p>
            <p className='mb-4 text-xl'>daisyUI, shadcnUI, Radix, MUI</p>
          </div>
        </div>
        <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 bg-base-100 shadow-xl'>
          <div className='collapse-title inline-flex items-center text-xl'>
            <h2>JavaScript</h2>
          </div>
          <div className='collapse-content'>
            <p className='text-2xl font-bold'>Languages</p>
            <p className='mb-4 text-xl'>TypeScript, JavaScript</p>
            <p className='text-2xl font-bold'>Frameworks</p>
            <p className='mb-4 text-xl'>React, Next.js</p>
            <p className='text-2xl font-bold'>Libraries</p>
            <p className='mb-4 text-xl'>Redux, tRPC, PrismaORM, Tanstack(React)Query, Zustand</p>
            <p className='text-2xl font-bold'>WebGL</p>
            <p className='mb-4 text-xl'>Three.js, React Three fiber, Theatre.js, Rapier.js</p>
            <p className='text-2xl font-bold'>Tools</p>
            <p className='mb-4 text-xl'>Vite, T3 app, Vercel, Gulp</p>
          </div>
        </div>

        <div tabIndex={0} className='collapse-plus rounded-box collapse my-4 bg-base-100  shadow-xl'>
          <div className='collapse-title inline-flex items-center text-xl'>
            <h2>Other</h2>
          </div>
          <div className='collapse-content'>
            <p className='text-2xl font-bold'>Design</p>
            <p className='mb-4 text-xl'>Figma</p>
            <p className='text-2xl font-bold'>OS</p>
            <p className='mb-4 text-xl'>Windows</p>
          </div>
        </div>
      </div>
      <div className=' mb-12 h-96  w-full px-6 md:my-12 lg:w-2/6'>
        <SkillScene />
      </div>
    </div>
  )
}

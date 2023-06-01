'use client'
import dynamic from 'next/dynamic'
import { Loading } from '../canvas/Loading'
import { getProject } from '@theatre/core'

import projectState from 'public/theatre-project-state.json'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const sheet = getProject('Targets Project', { state: projectState }).sheet('Targets Sheet')
const LandingScene = dynamic(() => import('@/components/canvas/LandingScene').then((mod) => mod.LandingScene), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})

export const Landing = () => {
  return (
    <>
      <div className='hero absolute top-0'>
        <div className=' hero-content w-full flex-col items-start justify-center md:mt-40 '>
          <h2 className='text-xl uppercase'>Hello, my name is</h2>
          <h1 className='mb-4 text-5xl font-bold'>Arseniy Filatov</h1>
          <h3 className='text-2xl leading-normal'>And I`m a react frontend developer</h3>
          <a href='#footer' className='btn-secondary btn-wide btn'>
            Contact me
          </a>
        </div>
      </div>
      <View className='flex h-screen w-full flex-col items-center justify-center'>
        <LandingScene />
        <Common />
      </View>
    </>
  )
}

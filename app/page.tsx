'use client'
import { About } from '@/components/dom/About'
import { Landing } from '@/components/dom/Landing'
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Landing />
      <About />
      <Script src='inobounce.js'/>
    </>
  )
}

'use client'
import { About } from '@/components/dom/About'
import { Footer } from '@/components/dom/Footer'
import { Landing } from '@/components/dom/Landing'
import { Projects } from '@/components/dom/Projects'
import { Skills } from '@/components/dom/Skills'

export default function Page() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Footer />
    </>
  )
}

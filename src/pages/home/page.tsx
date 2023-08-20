'use client'
import { Footer } from '@/shared/ui'
import { About } from '@/widgets/about'
import { Landing } from '@/widgets/landing'
import { Projects } from '@/widgets/projects'
import { Skills } from '@/widgets/skills'

export const HomePage = () => {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

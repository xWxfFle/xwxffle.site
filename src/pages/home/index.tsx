'use client'
import { Footer } from '@/shared/ui'
import { About } from '@/widgets/about'
import { Landing } from '@/widgets/landing'
import { Skills } from '@/widgets/skills'

const HomePage = () => {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Footer />
    </>
  )
}

export default HomePage

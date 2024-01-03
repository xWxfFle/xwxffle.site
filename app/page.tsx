'use client'

import { Footer } from '@/shared/ui'
import { About } from '@/widgets/about'
import { Landing } from '@/widgets/landing'
import { Skills } from '@/widgets/skills'

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

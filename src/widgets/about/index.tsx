'use client'

import dynamic from 'next/dynamic'
import { ContentBlock } from '@/entities/content-block'
import { Scene } from '@/entities/scene'
import { Container } from '@/shared/ui'

const ReactLogo = dynamic(
  () =>
    import('@/shared/ui/assets/models/react-logo').then((mod) => mod.ReactLogo),
  {
    ssr: false,
  },
)

const AboutScene = () => (
  <Scene grid position={[0, 0, 5]}>
    <ReactLogo />
  </Scene>
)

export const About = () => {
  return (
    <Container>
      <ContentBlock subtitle="01" title="About me" scene={<AboutScene />}>
        <p className="mb-8  leading-normal">
          I`m frontend developer from Rostov-on-Don, Russia. Now I live in St.
          Petersburg and study at ITMO University. I started my career in 2021
          as a trainee Node.js developer for a company working on blockchain
          apps. These days I work as a frontend developer. Also like creating
          WebGL applications using Three.js and React Three Fiber.
        </p>
      </ContentBlock>
    </Container>
  )
}

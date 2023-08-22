/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
'use client'

import { Float, MeshWobbleMaterial, Text3D } from '@react-three/drei'
import { ContentBlock } from '@/entities/content-block'
import { Scene } from '@/entities/scene'
import { Collapse, Container } from '@/shared/ui'

const SkillsScene = () => (
  <Scene grid position={[0, 0, 5]}>
    <Float>
      <Text3D
        position={[-2.5, 0, -1]}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1}
        font="/fonts/Rammetto_One_Regular.json"
      >
        {`hello\nworld`}
        <MeshWobbleMaterial color="#F4B857" factor={0.5} />
      </Text3D>
    </Float>
  </Scene>
)

export const Skills = () => {
  return (
    <Container className="md:flex-row-reverse">
      <ContentBlock title="My stack" subtitle="02" scene={<SkillsScene />}>
        <Collapse.Root title="HTML / CSS">
          <Collapse.Heading>Frameworks</Collapse.Heading>
          <Collapse.Paragraph>Tailwind, Typewind</Collapse.Paragraph>
          <Collapse.Heading>Libraries</Collapse.Heading>
          <Collapse.Paragraph>
            daisyUI, shadcnUI, RadixUI, cva, clsx
          </Collapse.Paragraph>
        </Collapse.Root>

        <Collapse.Root title="JavaScript">
          <Collapse.Heading>Languages</Collapse.Heading>
          <Collapse.Paragraph>TypeScript, JavaScript</Collapse.Paragraph>
          <Collapse.Heading>Libraries</Collapse.Heading>
          <Collapse.Paragraph>
            Effector, tRPC, PrismaORM, Tanstack(React)Query
          </Collapse.Paragraph>
          <Collapse.Heading>WebGL</Collapse.Heading>
          <Collapse.Paragraph>
            Three.js, React Three fiber, Theatre.js, Rapier.js
          </Collapse.Paragraph>
          <Collapse.Heading>Tools</Collapse.Heading>
          <Collapse.Paragraph>
            Eslint-kit, Vite, T3-app, @neodx/svg
          </Collapse.Paragraph>
        </Collapse.Root>

        <Collapse.Root title="Other">
          <Collapse.Heading>Design</Collapse.Heading>
          <Collapse.Paragraph>Figma, Blender</Collapse.Paragraph>
          <Collapse.Heading>OS</Collapse.Heading>
          <Collapse.Paragraph>Windows</Collapse.Paragraph>
        </Collapse.Root>
      </ContentBlock>
    </Container>
  )
}

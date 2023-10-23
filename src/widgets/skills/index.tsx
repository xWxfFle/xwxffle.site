'use client'

import { Float, MeshWobbleMaterial, Text3D } from '@react-three/drei'
import { ContentBlock } from '@/entities/content-block'
import { Scene } from '@/entities/scene'
import { Container, Typography } from '@/shared/ui'

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
        <Typography.Heading>Frameworks & libraries</Typography.Heading>
        <Typography.Paragraph>
          React, Next.js, Effector, Atomic router, tRPC, PrismaORM
        </Typography.Paragraph>
        <Typography.Heading>WebGL</Typography.Heading>
        <Typography.Paragraph>
          Three.js, React Three fiber, Theatre.js, Rapier.js
        </Typography.Paragraph>
        <Typography.Heading>Styling</Typography.Heading>
        <Typography.Paragraph>
          Tailwind, daisyUI, shadcnUI, RadixUI, Mantine, cva
        </Typography.Paragraph>
        <Typography.Heading>Other</Typography.Heading>
        <Typography.Paragraph>FSD, Eslint-kit, @neodx/svg</Typography.Paragraph>
      </ContentBlock>
    </Container>
  )
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
'use client'

import { Float, MeshWobbleMaterial, Text3D } from '@react-three/drei'
import { ContentBlock } from '@/entities/content-block'
import { Scene } from '@/entities/scene'
import { Container } from '@/shared/ui'

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
        <div
          tabIndex={0}
          className="collapse-plus rounded-box collapse my-4  bg-base-100  shadow-xl"
        >
          <div className="collapse-title inline-flex items-center text-xl">
            <h2>HTML / CSS</h2>
          </div>
          <div className="collapse-content">
            <p className="text-2xl font-bold">Frameworks</p>
            <p className="mb-4 text-xl">Tailwind, Typewind</p>
            <p className="text-2xl font-bold">Libraries</p>
            <p className="mb-4 text-xl">
              daisyUI, shadcnUI, RadixUI, cva, clsx
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse-plus rounded-box collapse my-4 bg-base-100 shadow-xl"
        >
          <div className="collapse-title inline-flex items-center text-xl">
            <h2>JavaScript</h2>
          </div>
          <div className="collapse-content">
            <p className="text-2xl font-bold">Languages</p>
            <p className="mb-4 text-xl">TypeScript, JavaScript</p>
            <p className="text-2xl font-bold">Frameworks</p>
            <p className="mb-4 text-xl">React, Next.js</p>
            <p className="text-2xl font-bold">Libraries</p>
            <p className="mb-4 text-xl">
              Effector, tRPC, PrismaORM, Tanstack(React)Query
            </p>
            <p className="text-2xl font-bold">WebGL</p>
            <p className="mb-4 text-xl">
              Three.js, React Three fiber, Theatre.js, Rapier.js
            </p>
            <p className="text-2xl font-bold">Tools</p>
            <p className="mb-4 text-xl">Eslint-kit, Vite, T3-app, @neodx/svg</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse-plus rounded-box collapse my-4 bg-base-100  shadow-xl"
        >
          <div className="collapse-title inline-flex items-center text-xl">
            <h2>Other</h2>
          </div>
          <div className="collapse-content">
            <p className="text-2xl font-bold">Design</p>
            <p className="mb-4 text-xl">Figma</p>
            <p className="text-2xl font-bold">OS</p>
            <p className="mb-4 text-xl">Windows</p>
          </div>
        </div>
      </ContentBlock>
    </Container>
  )
}

/* eslint-disable react/no-unknown-property */
import { Float, MeshWobbleMaterial, Text3D } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Loading } from '../../../ui/loading'

const View = dynamic(
  () => import('@/components/canvas/view-three').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <Loading />,
  },
)
const Common = dynamic(
  () => import('@/components/canvas/view-three').then((mod) => mod.Common),
  { ssr: false },
)

export const SkillScene = () => (
  <View className="h-full w-full">
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
    <gridHelper args={[40, 20, '#1c8259', '#1c8259']} position={[0, -3, 0]} />
    <Common position={[0, 0, 5]} />
  </View>
)

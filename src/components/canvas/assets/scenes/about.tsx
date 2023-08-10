/* eslint-disable react/no-unknown-property */
import dynamic from 'next/dynamic'
import { Loading } from '../../../ui/loading'

const ReactLogo = dynamic(
  () =>
    import('@/components/canvas/assets/models/react-logo').then(
      (mod) => mod.ReactLogo,
    ),
  {
    ssr: false,
  },
)
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

export const ReactLogoScene = () => (
  <View className="h-full w-full">
    <ReactLogo />
    <gridHelper args={[40, 20, '#1c8259', '#1c8259']} position={[0, -3, 0]} />
    <Common position={[0, 0, 5]} />
  </View>
)

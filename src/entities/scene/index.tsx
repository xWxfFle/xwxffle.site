import { Vector3 } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'
import { Loader } from '@/shared/ui'

const View = dynamic(() => import('./ui/view').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader />,
})
const Common = dynamic(() => import('./ui/view').then((mod) => mod.Common), {
  ssr: false,
})

type Props = PropsWithChildren & {
  grid?: boolean
  orbit?: boolean
  fov?: number
  position?: Vector3
}

export const Scene = ({ children, grid, fov, position, orbit }: Props) => (
  <View className="h-full w-full" orbit={orbit}>
    {children}
    {grid && (
      // eslint-disable-next-line react/no-unknown-property
      <gridHelper args={[40, 20, '#1c8259', '#1c8259']} position={[0, -3, 0]} />
    )}
    <Common position={position ? position : [0, 0, 0]} fov={fov ? fov : 60} />
  </View>
)

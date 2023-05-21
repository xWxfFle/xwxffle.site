import studio from '@theatre/studio'
import { SheetProvider, editable as e } from '@theatre/r3f'
import extension from '@theatre/r3f/dist/extension'
import { getProject } from '@theatre/core'
import { Target } from './assets/Target'
import { ContactShadows } from '@react-three/drei'
import { Arrow } from './assets/Arrow'
import { Stones } from './assets/Stones'
import { Tree } from './assets/Tree'
import { Pumpkin } from './assets/Pumpkin'

studio.initialize()
studio.extend(extension)
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

export const Intro = () => {
  return (
    <SheetProvider sheet={demoSheet}>
      <ContactShadows position={[0, 0, 0]} opacity={0.1} scale={20} blur={1} />
      <Arrow theatreKey='arrow-1' />
      <Arrow theatreKey='arrow-2' />
      <Arrow theatreKey='arrow-3' />
      <Target theatreKey='target-1' />
      <Target theatreKey='target-2' />
      <Target theatreKey='target-3' />
      <Stones theatreKey='stones-1' />
      <Stones theatreKey='stones-2' />
      <Tree theatreKey='tree-1' />
      <Tree theatreKey='tree-2' />
      <Pumpkin theatreKey='pumpkin-1' />
    </SheetProvider>
  )
}

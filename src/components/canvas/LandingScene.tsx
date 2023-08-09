import { ContactShadows } from '@react-three/drei'
import { getProject } from '@theatre/core'
import { SheetProvider } from '@theatre/r3f'
import projectState from 'public/theatre-project-state.json'
import { useEffect } from 'react'
import { Arrow } from './assets/Arrow'
import { Pumpkin } from './assets/Pumpkin'
import { Stones } from './assets/Stones'
import { Target } from './assets/Target'
import { Tree } from './assets/Tree'

const sheet = getProject('Targets Project', { state: projectState }).sheet(
  'Targets Sheet',
)

export const LandingScene = () => {
  useEffect(() => {
    sheet.project.ready.then(() => sheet.sequence.play({ range: [0, 3] }))
  }, [])
  return (
    <SheetProvider sheet={sheet}>
      <ContactShadows position={[0, 0, 0]} opacity={0.1} scale={20} blur={1} />
      <Arrow theatreKey="arrow-1" />
      <Arrow theatreKey="arrow-2" />
      <Arrow theatreKey="arrow-3" />
      <Arrow theatreKey="arrow-4" />
      <Target theatreKey="target-1" />
      <Target theatreKey="target-2" />
      <Target theatreKey="target-3" />
      <Stones theatreKey="stones-1" />
      <Stones theatreKey="stones-2" />
      <Tree theatreKey="tree-1" />
      <Tree theatreKey="tree-2" />
      <Pumpkin theatreKey="pumpkin-1" />
    </SheetProvider>
  )
}

'use client'

import { ContentBlock } from '@/entities/content-block'
import { Container } from '@/shared/ui'
import { projects } from './constants'
import { ProjectCard } from './ui/project-card'

export const Projects = () => {
  return (
    <Container>
      <ContentBlock subtitle="03" title="Projects">
        <div className="flex w-full flex-wrap gap-8 md:flex-row">
          {projects.map((project) => (
            <ProjectCard
              key={project.git}
              title={project.title}
              text={project.text}
              git={project.git}
              link={project.link}
            />
          ))}
        </div>
      </ContentBlock>
    </Container>
  )
}

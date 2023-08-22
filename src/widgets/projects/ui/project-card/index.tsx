import { Project } from '../../types'

export const ProjectCard = ({ title, link, git, text }: Project) => (
  <div className="card w-full xl:w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="my-4">{text}</p>
      <div className="card-actions justify-end">
        <a href={git} target="_blank">
          <button className="btn-outline btn">Go to git</button>
        </a>
        {link && (
          <a href={link} target="_blank">
            <button className="btn-secondary btn">Open</button>
          </a>
        )}
      </div>
    </div>
  </div>
)

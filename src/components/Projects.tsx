import { projects } from '../data/projects'
import Section from './Section'
import './Projects.css'

export default function Projects() {
  return (
    <Section id="projects" command="ls projects/">
      {projects.map((p) => (
        <article key={p.name} className="proj">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <div className="tags">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          {p.links && (
            <div className="proj-links">
              {p.links.map((l) => (
                <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </Section>
  )
}
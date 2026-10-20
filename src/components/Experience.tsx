import { experience } from '../data/experience'
import Section from './Section'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" command="git log --career">
      {experience.map((job) => (
        <article key={job.period} className="job">
          <div className="job-when">{job.period}</div>
          <div>
            <h3>{job.title}</h3>
            <p className="job-org">{job.org}</p>
              <div className="tags">
              {job.stack.map((s) => (
                  <span key={s}>{s}</span>
              ))}
            </div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </Section>
  )
}
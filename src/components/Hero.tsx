import { profile } from '../data/profile'
import { useTyping } from '../hooks/useTyping'
import './Hero.css'

export default function Hero() {
  const { typed, done } = useTyping('whoami')

  return (
    <section id="top" className="hero">
      <p className="section-cmd">
        <b>$</b> <span>{typed}</span>
        <span className="cursor" aria-hidden="true" />
      </p>

      <div className={`hero-body ${done ? 'on' : ''}`}>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-lead">{profile.summary}</p>
        <div className="hero-links">
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </div>
    </section>
  )
}
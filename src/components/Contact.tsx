import { profile } from '../data/profile'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" command="./contact.sh">
      <p>Open to graduate and entry-level software roles in Melbourne. The quickest way to reach me is email.</p>
      <p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <br />
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            {profile.linkedin.replace('https://', '')}
        </a>
        <br />
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
            {profile.github.replace('https://', '')}
        </a>
      </p>
    </Section>
  )
}
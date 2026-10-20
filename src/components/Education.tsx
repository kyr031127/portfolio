import { education } from '../data/education'
import Section from './Section'
import './Education.css'

export default function Education() {
  return (
    <Section id="education" command="cat education.txt">
      <div className="edu">
        <p className="edu-degree">{education.degree}</p>
        <p className="edu-school">
          {education.school}. {education.period}
        </p>
        <p>Coursework: {education.coursework}</p>
        <p>{education.teamwork}</p>
      </div>
    </Section>
  )
}
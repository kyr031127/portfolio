import { Fragment } from 'react'
import { skills } from '../data/skills'
import Section from './Section'
import './Skills.css'

const entries = Object.entries(skills)

function Quoted({ text, className }: { text: string; className: string }) {
  return <span className={className}>{`"${text}"`}</span>
}

function renderValue(value: string[] | Record<string, string>) {
  if (Array.isArray(value)) {
    return (
      <>
        <span className="p">[</span>
        {value.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span className="p">, </span>}
            <Quoted text={item} className="s" />
          </Fragment>
        ))}
        <span className="p">]</span>
      </>
    )
  }

  const pairs = Object.entries(value)
  return (
    <>
      <span className="p">{'{ '}</span>
      {pairs.map(([k, v], i) => (
        <Fragment key={k}>
          {i > 0 && <span className="p">, </span>}
          <Quoted text={k} className="k" />
          <span className="p">: </span>
          <Quoted text={v} className="s" />
        </Fragment>
      ))}
      <span className="p">{' }'}</span>
    </>
  )
}

export default function Skills() {
  return (
    <Section id="skills" command="cat skills.json">
      <pre className="json" aria-label="Skills">
        <span className="p">{'{'}</span>
        {'\n'}
        {entries.map(([key, value], i) => (
          <Fragment key={key}>
            {'  '}
            <Quoted text={key} className="k" />
            <span className="p">: </span>
            {renderValue(value)}
            {i < entries.length - 1 && <span className="p">,</span>}
            {'\n'}
          </Fragment>
        ))}
        <span className="p">{'}'}</span>
      </pre>
    </Section>
  )
}
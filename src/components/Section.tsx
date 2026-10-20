import type { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
  id: string
  command: string
  children: ReactNode
}

export default function Section({ id, command, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <p className="section-cmd">
        <b>$</b> <span>{command}</span>
      </p>
      {children}
    </section>
  )
}
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { WELCOME, commands, easterEggs } from '../data/commands'
import Section from './Section'
import './Terminal.css'

type Line = { text: string; echo?: boolean }

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([{ text: WELCOME }])
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const raw = value.trim()
    setValue('')
    if (!raw) return

    const key = raw.toLowerCase()

    if (key === 'clear') {
      setLines([])
      return
    }

    const answer =
      commands[key] ?? easterEggs[key] ?? `command not found: ${raw}. Type 'help' for the list.`

    setLines((prev) => [...prev, { text: raw, echo: true }, { text: answer }])
    requestAnimationFrame(() => inputRef.current?.scrollIntoView({ block: 'nearest' }))
  }

  return (
    <Section id="terminal" command="exec shell --interactive">
      <div className="term" onClick={() => inputRef.current?.focus()}>
        <div className="term-out" aria-live="polite">
          {lines.map((line, i) => (
            <div key={i} className={line.echo ? 'echo' : undefined}>
              {line.text}
            </div>
          ))}
        </div>
        <form className="term-prompt" onSubmit={handleSubmit}>
          <b>$</b>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>
      <p className="term-hint">
        Type <code>help</code> to see commands.
      </p>
    </Section>
  )
}
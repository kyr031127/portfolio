import { useEffect, useState } from 'react'

export function useTyping(text: string, speed = 110) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [count, setCount] = useState(reduceMotion ? text.length : 0)

  useEffect(() => {
    if (count >= text.length) return
    const id = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [count, text, speed])

  return { typed: text.slice(0, count), done: count >= text.length }
}
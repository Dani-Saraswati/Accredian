'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOut curve
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.25, 0.1, 0.25, 1] as const

type SeoRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

/** Scroll-triggered fade/slide: disabled when the user prefers reduced motion (Finck-style respectful motion). */
export function SeoReveal({ children, className, delay = 0, y = 18 }: SeoRevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.5, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px 0px -80px 0px' }}
      transition={{ duration: 0.5, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** translate direction on entrance */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  as?: 'div' | 'section' | 'li' | 'span'
  once?: boolean
}

const offset = 28

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
      x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}

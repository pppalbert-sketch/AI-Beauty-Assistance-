import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
}

/**
 * Soft moving gradient mesh with floating glowing particles.
 * Purely decorative — hidden from assistive tech.
 */
export function GlowBackground({ particleCount = 18 }: { particleCount?: number }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 4 + Math.random() * 10,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5,
      })),
    [particleCount],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-mesh animate-gradient-bg animate-gradient-shift" />

      {/* Large soft orbs */}
      <motion.div
        className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-blush-300/30 dark:bg-blush-500/15 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-40 h-[32rem] w-[32rem] rounded-full bg-lavender-300/30 dark:bg-lavender-500/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glowing particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-white to-blush-200 dark:from-lavender-200 dark:to-blush-300 shadow-[0_0_12px_rgba(248,168,198,0.8)]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

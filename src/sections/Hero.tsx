import { motion } from 'framer-motion'
import { Play, Sparkles, Droplets, Check, Star } from 'lucide-react'
import { GlowBackground } from '../components/GlowBackground'
import { PhoneMockup } from '../components/PhoneMockup'

const floatingCards = [
  {
    icon: Sparkles,
    title: 'Skin Score',
    value: '87 · Excellent',
    accent: 'from-blush-500 to-lavender-500',
    position: 'left-0 top-24 sm:-left-6',
    delay: 0.6,
    anim: 'animate-float',
  },
  {
    icon: Droplets,
    title: 'Water Reminder',
    value: 'Time to hydrate 💧',
    accent: 'from-sky-400 to-cyan-500',
    position: 'right-0 top-10 sm:-right-4',
    delay: 0.8,
    anim: 'animate-float-slow',
  },
  {
    icon: Check,
    title: 'Routine Completed',
    value: '4 of 4 steps ✓',
    accent: 'from-emerald-400 to-teal-500',
    position: 'left-0 bottom-24 sm:-left-10',
    delay: 1,
    anim: 'animate-float-slow',
  },
  {
    icon: Sparkles,
    title: 'AI Coach Tip',
    value: 'Try niacinamide tonight',
    accent: 'from-lavender-500 to-fuchsia-500',
    position: 'right-0 bottom-16 sm:-right-8',
    delay: 1.2,
    anim: 'animate-float',
  },
]

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20 section-pad">
      <GlowBackground />

      <div className="container-xl relative grid items-center gap-12 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5 text-blush-500" />
            AI-Powered Beauty Companion
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Your Personal <span className="text-gradient">AI Beauty</span> Assistant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base text-muted sm:text-lg"
          >
            Analyze your skin, build personalized routines, organize your beauty products, and
            achieve healthier skin with AI guidance every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#download" className="btn-primary text-base">
              Get Started Free
            </a>
            <a href="#demo" className="btn-secondary text-base">
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {['from-blush-300 to-blush-500', 'from-lavender-300 to-lavender-500', 'from-rose-300 to-pink-500', 'from-violet-300 to-purple-500'].map(
                (g, i) => (
                  <span
                    key={i}
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br ${g} text-xs font-bold text-white`}
                  >
                    {['S', 'M', 'A', 'J'][i]}
                  </span>
                ),
              )}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-bold">4.9/5</span>
              </div>
              <p className="text-xs text-muted">Loved by 12,000+ women</p>
            </div>
          </motion.div>
        </div>

        {/* Right: phone + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto mt-8 w-full max-w-md lg:mt-0"
        >
          <PhoneMockup />

          {floatingCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: card.delay }}
              className={`absolute z-20 hidden sm:block ${card.position} ${card.anim}`}
            >
              <div className="flex items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2.5 shadow-xl shadow-black/5">
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${card.accent} text-white`}
                >
                  <card.icon className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="text-[11px] font-bold leading-tight">{card.title}</p>
                  <p className="text-[10px] text-muted">{card.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

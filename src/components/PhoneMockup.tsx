import { motion } from 'framer-motion'
import { Droplets, Sparkles, Sun, Moon, TrendingUp, Check } from 'lucide-react'

/**
 * Realistic phone mockup rendering an in-app screen:
 * skin scan score, daily routine, progress tracking & AI recommendation.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-tr from-blush-400/40 to-lavender-400/40 blur-3xl" />

      {/* Phone frame */}
      <div className="relative rounded-[2.75rem] border-[10px] border-zinc-900 dark:border-zinc-800 bg-zinc-900 shadow-2xl shadow-blush-500/20">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-zinc-900 dark:bg-zinc-800" />

        {/* Screen */}
        <div className="relative h-[588px] overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-cream-50 to-blush-50 dark:from-zinc-900 dark:to-zinc-950">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3.5 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2.5 w-3.5 rounded-sm bg-zinc-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
            </span>
          </div>

          {/* App header */}
          <div className="px-5 pt-4">
            <p className="text-[11px] font-medium text-zinc-400">Good morning,</p>
            <p className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-100">
              Sophia ✨
            </p>
          </div>

          {/* Skin score card */}
          <div className="mx-5 mt-3 rounded-3xl bg-gradient-to-br from-blush-500 to-lavender-500 p-4 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider opacity-80">Skin Score</p>
                <p className="font-display text-3xl font-extrabold">87</p>
                <p className="text-[10px] opacity-90">+6 this week</p>
              </div>
              <div className="relative grid h-16 w-16 place-items-center">
                <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="15.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="97"
                    initial={{ strokeDashoffset: 97 }}
                    whileInView={{ strokeDashoffset: 13 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
                  />
                </svg>
                <Sparkles className="absolute h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick metrics */}
          <div className="mx-5 mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: Droplets, label: 'Hydration', value: '72%', color: 'text-sky-500' },
              { icon: TrendingUp, label: 'Glow', value: '+12%', color: 'text-emerald-500' },
              { icon: Sparkles, label: 'Streak', value: '14d', color: 'text-amber-500' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl bg-white/80 dark:bg-white/5 p-2.5 text-center backdrop-blur"
              >
                <m.icon className={`mx-auto h-4 w-4 ${m.color}`} />
                <p className="mt-1 text-sm font-bold text-zinc-800 dark:text-zinc-100">{m.value}</p>
                <p className="text-[9px] text-zinc-400">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Today's routine */}
          <div className="mx-5 mt-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-bold text-zinc-700 dark:text-zinc-200">Today's Routine</p>
              <span className="flex items-center gap-1 text-[10px] text-zinc-400">
                <Sun className="h-3 w-3" /> Morning
              </span>
            </div>
            <div className="space-y-2">
              {[
                { step: 'Gentle Cleanser', done: true },
                { step: 'Vitamin C Serum', done: true },
                { step: 'Moisturizer', done: false },
                { step: 'SPF 50', done: false },
              ].map((r, i) => (
                <motion.div
                  key={r.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/5 px-3 py-2 backdrop-blur"
                >
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-full ${
                      r.done
                        ? 'bg-gradient-to-br from-blush-500 to-lavender-500'
                        : 'border-2 border-zinc-300 dark:border-zinc-600'
                    }`}
                  >
                    {r.done && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      r.done
                        ? 'text-zinc-400 line-through'
                        : 'text-zinc-700 dark:text-zinc-200'
                    }`}
                  >
                    {r.step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI tip pill */}
          <div className="mx-5 mt-2.5 flex items-center gap-2 rounded-2xl bg-lavender-100 dark:bg-lavender-500/15 px-3 py-2">
            <Moon className="h-4 w-4 shrink-0 text-lavender-600 dark:text-lavender-300" />
            <p className="text-[10px] leading-tight text-lavender-700 dark:text-lavender-200">
              <span className="font-bold">AI Coach:</span> Add retinol tonight to boost renewal.
            </p>
          </div>

          {/* Bottom nav */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/40 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 px-6 py-3 backdrop-blur-xl">
            {[Sparkles, Droplets, TrendingUp, Sun].map((Icon, i) => (
              <Icon
                key={i}
                className={`h-5 w-5 ${i === 0 ? 'text-blush-500' : 'text-zinc-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

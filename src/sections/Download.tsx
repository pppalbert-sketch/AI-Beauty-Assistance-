import { Apple, Play, QrCode, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { GlowBackground } from '../components/GlowBackground'
import { PhoneMockup } from '../components/PhoneMockup'
import { Reveal } from '../components/Reveal'

const perks = ['Free to start', 'No credit card', 'Cancel anytime']

export function Download() {
  return (
    <section id="download" className="relative section-pad py-24">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush-500/10 via-lavender-500/10 to-blush-400/10 dark:from-blush-500/5 dark:via-lavender-500/5 dark:to-blush-400/5 glass-strong p-8 sm:p-12">
          <GlowBackground particleCount={10} />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Copy + buttons */}
            <div className="text-center lg:text-left">
              <Reveal>
                <span className="eyebrow">Download today</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Your best skin starts <span className="text-gradient">today</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-muted lg:mx-0 mx-auto">
                  Join 12,000+ women using BeautyAI as their personal beauty coach. Download free and
                  see results in weeks, not months.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start justify-center">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-5 py-3 text-white shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-zinc-900"
                  >
                    <Apple className="h-7 w-7" />
                    <span className="text-left">
                      <span className="block text-[10px] opacity-70">Download on the</span>
                      <span className="block text-sm font-bold leading-tight">App Store</span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-5 py-3 text-white shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-zinc-900"
                  >
                    <Play className="h-6 w-6 fill-current" />
                    <span className="text-left">
                      <span className="block text-[10px] opacity-70">Get it on</span>
                      <span className="block text-sm font-bold leading-tight">Google Play</span>
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                  {perks.map((p) => (
                    <span key={p} className="flex items-center gap-1.5 text-sm text-muted">
                      <Check className="h-4 w-4 text-emerald-500" strokeWidth={3} />
                      {p}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* QR code */}
              <Reveal delay={0.25}>
                <div className="mt-8 inline-flex items-center gap-4 rounded-3xl glass p-4">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white p-2">
                    <QrPattern />
                  </div>
                  <div className="text-left">
                    <p className="flex items-center gap-1.5 text-sm font-bold">
                      <QrCode className="h-4 w-4" /> Scan to download
                    </p>
                    <p className="text-xs text-muted">Point your camera to install instantly</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Phones */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto hidden max-w-xs sm:block"
            >
              <div className="animate-float-slow">
                <PhoneMockup />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Decorative QR-style pattern (illustrative). */
function QrPattern() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full text-zinc-900" aria-hidden="true">
      <rect x="0" y="0" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="10" y="10" width="8" height="8" fill="currentColor" />
      <rect x="72" y="0" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="82" y="10" width="8" height="8" fill="currentColor" />
      <rect x="0" y="72" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="10" y="82" width="8" height="8" fill="currentColor" />
      {[42, 54, 66, 78, 90].map((y) =>
        [42, 54, 66, 78, 90].map((x) =>
          (x + y) % 24 === 0 ? <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" fill="currentColor" /> : null,
        ),
      )}
      <rect x="42" y="6" width="8" height="8" fill="currentColor" />
      <rect x="54" y="18" width="8" height="8" fill="currentColor" />
      <rect x="6" y="42" width="8" height="8" fill="currentColor" />
      <rect x="18" y="54" width="8" height="8" fill="currentColor" />
    </svg>
  )
}

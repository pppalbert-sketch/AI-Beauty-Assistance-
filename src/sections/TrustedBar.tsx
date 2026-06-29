import { Users, Award, Stethoscope, Brain, Star } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const stats = [
  { icon: Users, value: '12,000+', label: 'Happy users' },
  { icon: Award, value: '50+', label: 'Beauty experts' },
  { icon: Stethoscope, value: '100%', label: 'Derm-inspired routines' },
  { icon: Brain, value: 'AI', label: 'Powered recommendations' },
]

export function TrustedBar() {
  return (
    <section className="relative section-pad py-12">
      <div className="container-xl">
        <Reveal>
          <div className="rounded-4xl glass-strong p-6 shadow-xl shadow-black/5 sm:p-8">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="font-display text-xl font-bold">4.9/5</p>
                  <p className="text-xs text-muted">App Store &amp; Google Play</p>
                </div>
              </div>

              <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-blush-300/50 to-transparent lg:block" />

              <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4 lg:w-auto">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.08}>
                    <div className="flex flex-col items-center gap-1.5 text-center lg:flex-row lg:gap-3 lg:text-left">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blush-100 to-lavender-100 dark:from-blush-500/15 dark:to-lavender-500/15 text-blush-600 dark:text-blush-300">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-base font-bold leading-none">{s.value}</p>
                        <p className="text-[11px] text-muted">{s.label}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

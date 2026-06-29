import { X, Check } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

const traditional = [
  'Forget your routines',
  'Buy the wrong products',
  'Waste money on trial & error',
  'No way to track progress',
  'Guesswork every day',
]

const beautyai = [
  'Personalized for your skin',
  'Tracks real results over time',
  'Everything organized in one place',
  'Daily AI guidance & reminders',
  'Confidence in every choice',
]

export function WhyChoose() {
  return (
    <section className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why choose BeautyAI"
          title={
            <>
              The smarter way to <span className="text-gradient">care for your skin</span>
            </>
          }
          subtitle="See the difference between guessing and a routine guided by AI."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Traditional */}
          <Reveal direction="right">
            <div className="h-full rounded-4xl border border-black/5 bg-zinc-50 dark:bg-white/[0.03] dark:border-white/5 p-7">
              <h3 className="font-display text-xl font-bold text-zinc-500 dark:text-zinc-400">
                Traditional Routine
              </h3>
              <p className="mt-1 text-sm text-muted">The old way of doing things</p>
              <ul className="mt-6 space-y-4">
                {traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-300">
                      <X className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* BeautyAI */}
          <Reveal direction="left" delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-4xl bg-gradient-to-br from-blush-500 to-lavender-600 p-7 text-white shadow-2xl shadow-blush-500/30">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <div className="relative">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                  BeautyAI
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
                    Recommended
                  </span>
                </h3>
                <p className="mt-1 text-sm text-white/80">Intelligent, personalized, organized</p>
                <ul className="mt-6 space-y-4">
                  {beautyai.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/25">
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

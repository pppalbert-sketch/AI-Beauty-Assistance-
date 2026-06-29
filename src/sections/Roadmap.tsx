import { motion } from 'framer-motion'
import { Sparkles, Apple, Activity, Dumbbell, ShoppingCart, UtensilsCrossed, Brain, Users } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const roadmap = [
  { icon: Sparkles, title: 'Beauty Assistant', status: 'Today', live: true },
  { icon: Apple, title: 'Nutrition AI', status: 'Coming soon' },
  { icon: Activity, title: 'Hormone Tracking', status: 'Coming soon' },
  { icon: Dumbbell, title: 'Fitness Planner', status: 'Coming soon' },
  { icon: ShoppingCart, title: 'Shopping Assistant', status: 'Coming soon' },
  { icon: UtensilsCrossed, title: 'Meal Planner', status: 'Coming soon' },
  { icon: Brain, title: 'Mental Wellness', status: 'Coming soon' },
  { icon: Users, title: 'Beauty Community', status: 'Coming soon' },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Future ecosystem"
          title={
            <>
              More than beauty — your <span className="text-gradient">complete wellness OS</span>
            </>
          }
          subtitle="BeautyAI is just the beginning. Here's what we're building next."
        />

        <div className="relative mt-14">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blush-300/60 via-lavender-300/60 to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`relative flex flex-col items-center gap-3 rounded-3xl p-6 text-center ${
                  item.live
                    ? 'glass-strong ring-2 ring-blush-400/40 shadow-xl shadow-blush-500/10'
                    : 'glass shadow-lg shadow-black/5'
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    item.live
                      ? 'bg-gradient-to-br from-blush-500 to-lavender-500 text-white'
                      : 'bg-gradient-to-br from-blush-100 to-lavender-100 dark:from-white/10 dark:to-white/5 text-blush-500 dark:text-lavender-300'
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    item.live
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-black/5 dark:bg-white/10 text-muted'
                  }`}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

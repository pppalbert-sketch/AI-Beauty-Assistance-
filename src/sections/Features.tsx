import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../data/features'

export function Features() {
  return (
    <section id="features" className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Everything you need"
          title={
            <>
              One app for your <span className="text-gradient">entire beauty routine</span>
            </>
          }
          subtitle="From skin analysis to hair care, BeautyAI replaces a drawer full of apps with a single, intelligent companion."
        />

        <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col overflow-hidden rounded-4xl glass p-6 shadow-lg shadow-black/5 transition-shadow hover:shadow-xl ${
                feature.span ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Hover glow */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />

              <span
                className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg`}
              >
                <feature.icon className="h-6 w-6" />
              </span>

              <h3 className="mt-5 font-display text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>

              <ul className="mt-4 space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blush-500 to-lavender-500">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

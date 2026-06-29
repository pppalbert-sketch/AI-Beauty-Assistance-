import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

interface Testimonial {
  quote: string
  name: string
  detail: string
  initial: string
  accent: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'My acne improved in just eight weeks. The routine reminders kept me consistent for the first time ever.',
    name: 'Maya R.',
    detail: 'Combination skin · 8 weeks in',
    initial: 'M',
    accent: 'from-blush-400 to-rose-500',
  },
  {
    quote: 'I finally know what products actually work for my skin. The ingredient checker is a game changer.',
    name: 'Aisha K.',
    detail: 'Sensitive skin · Premium',
    initial: 'A',
    accent: 'from-lavender-400 to-violet-500',
  },
  {
    quote: 'This replaced five different beauty apps. Everything I need is finally in one beautiful place.',
    name: 'Sophia L.',
    detail: 'Dry skin · VIP member',
    initial: 'S',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    quote: 'The AI coach answers questions I used to spend hours googling. It feels like having a derm in my pocket.',
    name: 'Priya N.',
    detail: 'Oily skin · 4 months in',
    initial: 'P',
    accent: 'from-teal-400 to-emerald-500',
  },
  {
    quote: 'Tracking my progress with photos keeps me motivated. My glow score went up 18 points!',
    name: 'Emma T.',
    detail: 'Normal skin · Premium',
    initial: 'E',
    accent: 'from-sky-400 to-blue-500',
  },
  {
    quote: 'I stopped wasting money on products that don’t suit me. BeautyAI paid for itself in a month.',
    name: 'Lena G.',
    detail: 'Combination skin · VIP',
    initial: 'L',
    accent: 'from-fuchsia-400 to-pink-500',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Loved by thousands"
          title={
            <>
              Real results from <span className="text-gradient">real women</span>
            </>
          }
          subtitle="Join a community of women who finally understand and love their skin."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid rounded-4xl glass p-6 shadow-lg shadow-black/5"
            >
              <Quote className="h-7 w-7 text-blush-300 dark:text-blush-500/50" />
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-[rgb(var(--text))]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-bold text-white`}
                >
                  {t.initial}
                </span>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted">{t.detail}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

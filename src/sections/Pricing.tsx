import { motion } from 'framer-motion'
import { Check, Crown, Sparkles, Gift } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

interface Plan {
  name: string
  icon: typeof Gift
  tagline: string
  price: number
  /** billing period shown next to the price */
  period: string
  /** small note under the price */
  note?: string
  features: string[]
  cta: string
  highlight?: boolean
  accent: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    icon: Gift,
    tagline: 'Start your glow-up journey',
    price: 0,
    period: 'forever',
    features: ['Routine tracker', 'Water tracking', 'Beauty calendar', 'Basic AI assistant'],
    cta: 'Get Started Free',
    accent: 'from-zinc-400 to-zinc-500',
  },
  {
    name: 'Premium',
    icon: Sparkles,
    tagline: 'Your full AI beauty coach',
    price: 9.99,
    period: '/ month',
    note: 'Billed monthly',
    features: [
      'Unlimited AI coaching',
      'AI skin analysis',
      'Progress tracking',
      'Ingredient scanner',
      'Hair care routines',
      'Smart reminders',
      'Product inventory',
      'Beauty insights',
    ],
    cta: 'Start Premium',
    highlight: true,
    accent: 'from-blush-500 to-lavender-500',
  },
  {
    name: 'VIP',
    icon: Crown,
    tagline: 'The ultimate beauty experience',
    price: 79.99,
    period: '/ year',
    note: 'Billed annually · just $6.67/mo',
    features: [
      'Everything in Premium',
      'Personalized beauty plans',
      'Priority AI responses',
      'Early feature access',
      'Exclusive beauty content',
    ],
    cta: 'Go VIP',
    accent: 'from-amber-400 to-orange-500',
  },
]

function formatPrice(value: number) {
  return value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)
}

export function Pricing() {
  return (
    <section id="pricing" className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Choose your <span className="text-gradient">glow plan</span>
            </>
          }
          subtitle="Start free, upgrade anytime. Cancel whenever you like — no commitments."
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const isFree = plan.price === 0
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-7 ${
                  plan.highlight
                    ? 'glass-strong shadow-2xl shadow-blush-500/20 lg:-mt-4 lg:mb-4 ring-2 ring-blush-400/40'
                    : 'glass shadow-lg shadow-black/5'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blush-500 to-lavender-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${plan.accent} text-white`}>
                    <plan.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                    <p className="text-xs text-muted">{plan.tagline}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold">${formatPrice(plan.price)}</span>
                  <span className="mb-1.5 text-sm text-muted">{plan.period}</span>
                </div>
                {plan.note && (
                  <p
                    className={`mt-1 text-xs ${
                      isFree ? 'text-muted' : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {plan.note}
                  </p>
                )}

                <a
                  href="#download"
                  className={`mt-6 w-full text-center ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blush-500 to-lavender-500">
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Ready to integrate with Stripe, Apple Pay &amp; Google Pay. 7-day free trial on paid plans.
        </p>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Droplet, FlaskConical, Sun, Sparkles, Scissors, Pill, ShoppingBag, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const products = [
  { icon: Droplet, name: 'Gentle Cleanser', category: 'Cleanser', price: '$24', rating: '4.8', accent: 'from-sky-400 to-cyan-500' },
  { icon: FlaskConical, name: 'Vitamin C Serum', category: 'Serums', price: '$38', rating: '4.9', accent: 'from-amber-400 to-orange-500' },
  { icon: Sun, name: 'Mineral SPF 50', category: 'SPF', price: '$29', rating: '4.7', accent: 'from-yellow-400 to-amber-500' },
  { icon: Sparkles, name: 'Hydra Moisturizer', category: 'Moisturizers', price: '$32', rating: '4.9', accent: 'from-blush-400 to-rose-500' },
  { icon: Scissors, name: 'Repair Hair Mask', category: 'Haircare', price: '$27', rating: '4.6', accent: 'from-fuchsia-400 to-pink-500' },
  { icon: Pill, name: 'Glow Supplements', category: 'Supplements', price: '$35', rating: '4.8', accent: 'from-lavender-400 to-violet-500' },
]

export function Marketplace() {
  return (
    <section id="marketplace" className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Affiliate marketplace"
          title={
            <>
              Shop products <span className="text-gradient">matched to your skin</span>
            </>
          }
          subtitle="AI-curated recommendations from trusted brands, with affiliate shopping built right in."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href="#download"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl glass p-5 shadow-lg shadow-black/5"
            >
              <div className="flex items-start justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-md`}>
                  <p.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-muted">{p.category}</p>
              <h3 className="mt-1 text-sm font-bold leading-tight">{p.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-base font-bold">{p.price}</span>
                <span className="flex items-center gap-1 text-xs text-amber-500">★ {p.rating}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#download" className="btn-secondary">
            <ShoppingBag className="h-4 w-4" />
            Explore the full marketplace
          </a>
        </div>
      </div>
    </section>
  )
}

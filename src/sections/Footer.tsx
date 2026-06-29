import { useState } from 'react'
import { Instagram, Twitter, Youtube, Facebook, Send, Check } from 'lucide-react'
import { Logo } from '../components/Logo'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Demo', 'Pricing', 'Marketplace', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'Security'],
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Facebook, label: 'Facebook' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <footer className="relative section-pad pt-16 pb-8">
      <div className="container-xl">
        {/* Newsletter */}
        <div className="rounded-4xl glass-strong p-8 sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold">
                Beauty tips, straight to your inbox
              </h3>
              <p className="mt-2 text-sm text-muted">
                Join our newsletter for skincare science, product picks, and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3.5 text-sm outline-none transition-shadow focus:ring-4 focus:ring-blush-400/30"
              />
              <button type="submit" className="btn-primary shrink-0">
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main footer */}
        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" aria-label="BeautyAI home">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Your personal AI beauty assistant — for healthier skin, organized routines, and
              confidence every day.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-muted transition-colors hover:text-blush-500 hover:bg-white/80 dark:hover:bg-white/10"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-blush-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 dark:border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} BeautyAI. All rights reserved. Made with 💕 for healthier skin.
          </p>
          <p className="text-xs text-muted">
            Not a substitute for professional medical or dermatological advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

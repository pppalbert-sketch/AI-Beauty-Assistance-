import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Roadmap', href: '#roadmap' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 section-pad">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`container-xl mt-4 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 pl-2 font-display text-lg font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blush-500 to-lavender-500 text-white shadow-md">
            <Sparkles className="h-4 w-4" />
          </span>
          Beauty<span className="text-gradient">AI</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--text))] hover:bg-white/50 dark:hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#download" className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            Get Started
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container-xl mt-2 overflow-hidden rounded-3xl glass-strong p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/60 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

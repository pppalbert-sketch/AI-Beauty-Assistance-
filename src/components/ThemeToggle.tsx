import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:bg-white/80 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavender-400/30 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-amber-300" />
          ) : (
            <Moon className="h-5 w-5 text-lavender-600" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

interface LogoMarkProps {
  className?: string
}

/**
 * BeautyAI brand mark — a five-petal bloom (beauty) finished with a small
 * sparkle accent (AI), drawn in the blush→lavender brand gradient so it reads
 * cleanly on both light and dark surfaces.
 */
export function LogoMark({ className = 'h-8 w-8' }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="BeautyAI logo" fill="none">
      <defs>
        <linearGradient id="beautyai-mark" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8467f" />
          <stop offset="0.55" stopColor="#c026a6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Petals */}
      <g fill="url(#beautyai-mark)">
        {[0, 72, 144, 216, 288].map((angle) => (
          <path
            key={angle}
            d="M32 32 C24 24 24 11 32 5 C40 11 40 24 32 32 Z"
            transform={`rotate(${angle} 32 32)`}
            opacity="0.92"
          />
        ))}
      </g>

      {/* Glowing center */}
      <circle cx="32" cy="32" r="5.4" fill="url(#beautyai-mark)" />
      <circle cx="32" cy="32" r="2.4" fill="#fff" />

      {/* AI sparkle accent */}
      <path
        d="M52 8c.9 3.4 2 4.5 5.4 5.4-3.4.9-4.5 2-5.4 5.4-.9-3.4-2-4.5-5.4-5.4 3.4-.9 4.5-2 5.4-5.4Z"
        fill="url(#beautyai-mark)"
      />
    </svg>
  )
}

interface LogoProps {
  className?: string
  markClassName?: string
}

/** Full lockup: bloom mark + "BeautyAI" wordmark. */
export function Logo({ className = '', markClassName }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 font-display text-lg font-extrabold ${className}`}>
      <LogoMark className={markClassName ?? 'h-8 w-8'} />
      Beauty<span className="text-gradient">AI</span>
    </span>
  )
}

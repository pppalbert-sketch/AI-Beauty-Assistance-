import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScanFace, Sparkles, RotateCcw, Info } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'

type Stage = 'idle' | 'scanning' | 'result'

const metrics = [
  { label: 'Hydration', value: 78, color: 'bg-sky-500' },
  { label: 'Clarity', value: 84, color: 'bg-emerald-500' },
  { label: 'Evenness', value: 71, color: 'bg-amber-500' },
  { label: 'Firmness', value: 89, color: 'bg-lavender-500' },
]

const recommendations = [
  'Add a hydrating hyaluronic acid serum in the morning',
  'Introduce niacinamide to even out skin tone',
  'Keep SPF 50 daily to protect your progress',
]

export function InteractiveDemo() {
  const [stage, setStage] = useState<Stage>('idle')

  const runScan = () => {
    setStage('scanning')
    setTimeout(() => setStage('result'), 2600)
  }

  return (
    <section id="demo" className="relative section-pad py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Try it yourself"
          title={
            <>
              Experience an <span className="text-gradient">AI skin scan</span> in seconds
            </>
          }
          subtitle="Tap to run a live simulation. See how BeautyAI analyzes skin, generates a beauty score, and builds your routine."
        />

        <Reveal className="mt-14">
          <div className="mx-auto grid max-w-4xl gap-6 rounded-[2.5rem] glass-strong p-6 shadow-2xl shadow-blush-500/10 sm:p-8 lg:grid-cols-2">
            {/* Scan stage */}
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-blush-100 to-lavender-100 dark:from-zinc-800 dark:to-zinc-900">
              {/* Face silhouette */}
              <ScanFace
                className="h-40 w-40 text-blush-400/60 dark:text-lavender-400/40"
                strokeWidth={1}
              />

              {/* Scanning beam */}
              <AnimatePresence>
                {stage === 'scanning' && (
                  <motion.div
                    initial={{ top: '0%' }}
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blush-500 to-transparent shadow-[0_0_24px_4px_rgba(232,70,127,0.6)]"
                  />
                )}
              </AnimatePresence>

              {/* Detection dots */}
              <AnimatePresence>
                {stage !== 'idle' &&
                  [
                    { x: '32%', y: '38%' },
                    { x: '64%', y: '40%' },
                    { x: '50%', y: '60%' },
                    { x: '40%', y: '72%' },
                  ].map((dot, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.3 }}
                      style={{ left: dot.x, top: dot.y }}
                      className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blush-500 bg-white/50"
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-blush-400/60" />
                    </motion.span>
                  ))}
              </AnimatePresence>

              {stage === 'scanning' && (
                <p className="absolute bottom-5 text-sm font-semibold text-blush-600 dark:text-blush-300">
                  Analyzing your skin…
                </p>
              )}
            </div>

            {/* Results / controls */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {stage === 'result' ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blush-500 to-lavender-500 text-white">
                        <span className="font-display text-2xl font-extrabold">82</span>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted">Beauty Score</p>
                        <p className="font-display text-lg font-bold">Healthy &amp; Glowing</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {metrics.map((m, i) => (
                        <div key={m.label}>
                          <div className="mb-1 flex justify-between text-xs font-medium">
                            <span>{m.label}</span>
                            <span className="text-muted">{m.value}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${m.value}%` }}
                              transition={{ duration: 0.9, delay: i * 0.1 }}
                              className={`h-full rounded-full ${m.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl bg-lavender-50 dark:bg-lavender-500/10 p-4">
                      <p className="flex items-center gap-1.5 text-xs font-bold text-lavender-700 dark:text-lavender-200">
                        <Sparkles className="h-3.5 w-3.5" /> AI Recommendations
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {recommendations.map((r) => (
                          <li key={r} className="text-xs text-muted">• {r}</li>
                        ))}
                      </ul>
                    </div>

                    <button onClick={() => setStage('idle')} className="btn-secondary mt-5 w-full text-sm">
                      <RotateCcw className="h-4 w-4" /> Run again
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center lg:text-left"
                  >
                    <h3 className="font-display text-2xl font-bold">Ready when you are</h3>
                    <p className="mt-2 text-sm text-muted">
                      Run a simulated AI scan to preview your beauty score, skin metrics, and a
                      personalized routine — no sign-up required.
                    </p>
                    <button
                      onClick={runScan}
                      disabled={stage === 'scanning'}
                      className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <ScanFace className="h-5 w-5" />
                      {stage === 'scanning' ? 'Scanning…' : 'Start AI Skin Scan'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted">
          <Info className="h-3.5 w-3.5" />
          Demo only. Results are simulated for illustration and are not medical advice.
        </p>
      </div>
    </section>
  )
}

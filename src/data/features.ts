import {
  ScanFace,
  Sun,
  FlaskConical,
  Package,
  LineChart,
  Scissors,
  Palette,
  HeartPulse,
  MessageCircleHeart,
  type LucideIcon,
} from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
  accent: string // tailwind gradient classes
  span?: boolean // featured (wider) card
}

export const features: Feature[] = [
  {
    icon: ScanFace,
    title: 'AI Skin Analysis',
    description: 'Upload a selfie and let AI detect what your skin needs — then get personalized recommendations.',
    points: ['Acne & redness', 'Dryness & dark spots', 'Pores & wrinkles', 'Personalized advice'],
    accent: 'from-blush-500 to-rose-500',
    span: true,
  },
  {
    icon: Sun,
    title: 'Morning & Night Routine',
    description: 'A daily customized skincare routine built around your goals and skin type.',
    points: ['AM: Cleanser, Vitamin C, Moisturizer, SPF', 'PM: Cleanser, Retinol, Moisturizer', 'Sleep reminder'],
    accent: 'from-amber-400 to-orange-500',
  },
  {
    icon: FlaskConical,
    title: 'Ingredient Checker',
    description: 'Scan any product and instantly understand what is really inside.',
    points: ['Safe vs harmful ingredients', 'Comedogenic rating', 'Pregnancy safe', 'Sensitive-skin rating'],
    accent: 'from-lavender-500 to-violet-500',
  },
  {
    icon: Package,
    title: 'Beauty Product Inventory',
    description: 'Track every product you own and never waste money again.',
    points: ['Expiration dates', 'Refill reminders', 'Almost-empty alerts', 'Money spent insights'],
    accent: 'from-teal-400 to-emerald-500',
  },
  {
    icon: LineChart,
    title: 'Progress Tracker',
    description: 'A visual timeline with before-and-after photos and beautiful charts.',
    points: ['Skin improvement', 'Hydration trends', 'Routine consistency', 'Glow score'],
    accent: 'from-sky-400 to-blue-500',
    span: true,
  },
  {
    icon: Scissors,
    title: 'Hair Care Assistant',
    description: 'Personalized hair routines that adapt to your scalp and goals.',
    points: ['Wash schedule', 'Scalp health', 'Hair growth tracker', 'Damage detection'],
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Makeup Organizer',
    description: 'Keep your entire makeup collection organized and fresh.',
    points: ['Foundation shades', 'Lipsticks library', 'Brush cleaning reminders', 'Expiration & wishlist'],
    accent: 'from-rose-400 to-blush-500',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Tracking',
    description: 'Beauty starts within — track the habits that make your skin glow.',
    points: ['Water & sleep', 'Stress tracker', 'Nutrition reminders', 'Beauty habits'],
    accent: 'from-cyan-400 to-teal-500',
  },
  {
    icon: MessageCircleHeart,
    title: 'AI Beauty Coach',
    description: 'A ChatGPT-style assistant that answers all your beauty questions with personalized advice.',
    points: ['“Why is my skin breaking out?”', '“What moisturizer should I use?”', '“What ingredients shouldn’t I mix?”'],
    accent: 'from-lavender-500 to-blush-500',
    span: true,
  },
]

# BeautyAI — Your Personal AI Beauty Assistant

A premium, luxury, AI-powered beauty marketing website. BeautyAI promotes a mobile app that
becomes every woman's personal beauty coach — skin analysis, personalized routines, product
organization, and daily AI guidance.

The design blends the minimal elegance of **Apple, Rhode, Glossier, and Notion**: soft pastel
gradients (blush pink, lavender, cream, white), glassmorphism cards, glowing AI-inspired effects,
smooth scroll animations, and a polished light **and** dark mode.

## ✨ Highlights

- **Attention-grabbing hero** — animated gradient mesh, glowing particles, a realistic in-app phone
  mockup, and floating UI cards (Skin Score, Water Reminder, Routine Completed, AI Coach Tip).
- **Interactive AI skin-scan demo** — visitors run a simulated scan and watch a live beauty score,
  skin metrics, and personalized recommendations animate in (demo only).
- **Full feature showcase** — AI Skin Analysis, Morning & Night Routine, Ingredient Checker, Product
  Inventory, Progress Tracker, Hair Care, Makeup Organizer, Wellness Tracking, and AI Beauty Coach.
- **Conversion sections** — trusted social proof, Traditional vs BeautyAI comparison, testimonials,
  3-tier pricing (Free $0 · Premium $9.99/mo · VIP $79.99/yr), affiliate marketplace,
  future-ecosystem roadmap, and an app download section with QR code.
- **Dark & light mode** with no flash on load and system-preference detection.
- **Accessible, SEO-ready, and fast** — semantic markup, reduced-motion support, Open Graph + JSON-LD
  structured data, code-split bundles, and optimized animations.

## 🛠 Tech Stack

| Concern          | Choice                          |
| ---------------- | ------------------------------- |
| Framework        | React 18 + TypeScript           |
| Build tool       | Vite 5                          |
| Styling          | Tailwind CSS 3 (custom theme)   |
| Animation        | Framer Motion                   |
| Icons            | lucide-react                    |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build locally
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI (Navbar, Reveal, PhoneMockup, ThemeToggle, …)
├── sections/          # Page sections (Hero, Features, Pricing, Download, …)
├── data/              # Content data (features list, …)
├── hooks/             # useTheme (light/dark provider)
├── App.tsx            # Page composition
├── main.tsx           # App entry
└── index.css          # Tailwind layers + design system
```

## 🎨 Design System

- **Colors** — `blush`, `lavender`, and `cream` scales defined in `tailwind.config.js`.
- **Glassmorphism** — `.glass` / `.glass-strong` utilities in `index.css`.
- **Gradients & glow** — `.text-gradient`, `.bg-mesh`, `.glow-ring`, plus custom keyframe animations
  (`float`, `gradient-shift`, `glow`, `shimmer`).

## 🔌 Ready for Production

- **Payments** — pricing CTAs are structured to drop in Stripe / Apple Pay / Google Pay.
- **Analytics** — single-page structure makes it trivial to add GA4, PostHog, or Plausible.
- **CMS** — testimonials, features, and marketplace items are data-driven (`src/data`), ready to be
  sourced from a headless CMS for blog and testimonial content.
- **Deployment** — static output in `/dist` deploys to Vercel, Netlify, Cloudflare Pages, or any
  static host.

---

> Demo content only. BeautyAI is a placeholder brand and the app is not a substitute for
> professional medical or dermatological advice.

import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './sections/Hero'
import { TrustedBar } from './sections/TrustedBar'
import { Features } from './sections/Features'
import { InteractiveDemo } from './sections/InteractiveDemo'
import { WhyChoose } from './sections/WhyChoose'
import { Testimonials } from './sections/Testimonials'
import { Pricing } from './sections/Pricing'
import { Marketplace } from './sections/Marketplace'
import { Roadmap } from './sections/Roadmap'
import { Download } from './sections/Download'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustedBar />
        <Features />
        <InteractiveDemo />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <Marketplace />
        <Roadmap />
        <Download />
      </main>
      <Footer />
    </div>
  )
}

export default App

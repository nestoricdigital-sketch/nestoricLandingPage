import { Header, Footer, FloatingElements } from './components/Layout'
import Hero from './components/Hero'
import { Features, Process, PainPoints } from './components/Features'
import { TrustBar, Stats, Testimonials } from './components/SocialProof'
import { CaseStudies, Comparison } from './components/CaseStudies'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#7A4DBE]/30">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <PainPoints />
        <Features />
        <Process />
        <CaseStudies />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  )
}

export default App

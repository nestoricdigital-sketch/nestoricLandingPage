import { Suspense, lazy } from 'react'
import { Header, Footer, FloatingElements } from './components/Layout'
import Hero from './components/Hero'
import './index.css'

// ─── Lazy-load everything below the fold ───────────────────────────────────
const TrustBar = lazy(() => import('./components/SocialProof').then(m => ({ default: m.TrustBar })))
const Stats = lazy(() => import('./components/SocialProof').then(m => ({ default: m.Stats })))
const Testimonials = lazy(() => import('./components/SocialProof').then(m => ({ default: m.Testimonials })))
const Challenge = lazy(() => import('./components/Challenge'))
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })))
const Process = lazy(() => import('./components/Features').then(m => ({ default: m.Process })))
const WhyNestoric = lazy(() => import('./components/WhyNestoric'))
const CaseStudies = lazy(() => import('./components/CaseStudies').then(m => ({ default: m.CaseStudies })))
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })))
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })))

// ─── Minimal skeleton shown while sections load ─────────────────────────────
const SectionSkeleton = () => (
  <div className="w-full py-20 animate-pulse">
    <div className="max-w-4xl mx-auto px-6 space-y-4">
      <div className="h-8 bg-white/5 rounded-lg w-1/3 mx-auto" />
      <div className="h-4 bg-white/5 rounded w-2/3 mx-auto" />
      <div className="h-4 bg-white/5 rounded w-1/2 mx-auto" />
    </div>
  </div>
)

function App() {
  return (
    <div className="bg-[#050505] text-white font-sans overflow-hidden">

      {/* ── Critical above-the-fold: loaded eagerly ── */}
      <Header />
      <Hero />

      {/* ── Below-the-fold: lazy loaded in chunks ── */}
      <Suspense fallback={<SectionSkeleton />}>
        <TrustBar />
        <Stats />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Challenge />
        <Features />
        <Process />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyNestoric />
        <CaseStudies />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
        <FAQ />
        <CTA />
      </Suspense>

      <Footer />
      <FloatingElements />
    </div>
  )
}

export default App
import { Header, Footer, FloatingElements } from './components/Layout'
import Hero from './components/Hero'
import { Features, Process, PainPoints } from './components/Features'
import { TrustBar, Stats, Testimonials } from './components/SocialProof'
import { CaseStudies, Comparison } from './components/CaseStudies'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import WhyNestoric from './components/WhyNestoric'
import Challenge from './components/Challenge'
import './index.css'

function App() {
  return (
    <div className=" bg-[#050505] text-white font-sans overflow-hidden  ">
      <Header />
      {/* <main> */}
      <Hero />
      <TrustBar />
      <Stats />
      {/* <PainPoints /> */}
      <Challenge />
      <Features />
      <Process />
      <WhyNestoric />
      <CaseStudies />
      {/* <Comparison /> */}
      <Testimonials />
      <FAQ />
      <CTA />
      {/* </main> */}
      <Footer />
      <FloatingElements />
    </div>
  )
}

export default App

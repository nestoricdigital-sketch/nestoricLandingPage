import { Zap, MessageCircle, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/mainNDlogo.webp';
import whatsapp from "../assets/wApp.webp";
import SideRays from './SideRay';


// border-b border-white/[0.08]
export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl ">
        <div className="max-w-7xl mx-auto px-6 md:h-20 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <SideRays /> */}
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7A4DBE] to-purple-800 flex items-center justify-center shadow-lg shadow-[#7A4DBE]/20">
              <Zap className="text-white" size={20} />
            </div> */}
            <img src={logo} alt="logo" className='h-full md:w-56 w-32 object-contain' />
            {/* <span className="text-xl font-bold tracking-tight text-white">Nestoric</span> */}
          </div>
          {/* No Top Navigation Links as per requirements */}
          <div className="flex md:flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="h-8  md:px-6 px-2 rounded-lg bg-[#7A4DBE] text-white text-sm font-semibold hover:bg-[#6a3da8] transition-colors shadow-lg shadow-[#7A4DBE]/25">
              Contact us
            </button>
          </div>

        </div>
      </header>
      {/* Appointment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-md bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 relative pointer-events-auto shadow-2xl"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">Book an Appointment</h3>
                <p className="text-[#A1A1AA] text-sm mb-6">Fill out the form below and our team will get back to you shortly.</p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Phone</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors" placeholder="+91 12345 67890" required />
                  </div>
                  <button type="submit" className="w-full h-12 mt-4 rounded-lg bg-[#7A4DBE] text-white font-semibold hover:bg-[#6a3da8] transition-colors shadow-lg shadow-[#7A4DBE]/25">
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export function Footer() {
  return (
    <footer className="pt-24 pb-8 border-t border-white/[0.05] bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-[#7A4DBE]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main CTA Block */}
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7A4DBE]/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let’s Build Something <span className="text-[#7A4DBE]">Timeless.</span>
              </h2>
              <p className="text-[#A1A1AA] text-lg mb-8 max-w-lg leading-relaxed">
                Whether you’re launching a new business or scaling an existing one, we’re here to help you
                create a brand that stands the test of time.
              </p>
              <button className="h-auto px-4 md:px-8 rounded-lg bg-[#7A4DBE] text-white font-semibold text-sm md:text-lg hover:bg-[#6a3da8] hover:scale-[1.02] transition-all shadow-lg shadow-[#7A4DBE]/25 flex items-center justify-center gap-2 w-full sm:w-auto">
                Book Your Free Consultation Today
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="lg:justify-self-end w-full max-w-md">
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-md">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#7A4DBE]" />
                    </div>
                    <div className="mt-1">
                      <p className="text-white font-medium mb-0.5">+91 99864 59376</p>
                      <p className="text-[#A1A1AA] text-sm">Give us a call</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#7A4DBE]" />
                    </div>
                    <div className="mt-1">
                      <a href="mailto:info@nestoricdigital.com" className="text-white font-medium mb-0.5 hover:text-[#7A4DBE] transition-colors block break-all">
                        info@nestoricdigital.com
                      </a>
                      <p className="text-[#A1A1AA] text-sm">Send us an email</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[#7A4DBE]" />
                    </div>
                    <div className="mt-1">
                      <p className="text-white font-medium mb-0.5">Indiranagar, Bangalore</p>
                      <p className="text-[#A1A1AA] text-sm">Visit our office</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Branding & Service Section CTA */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 py-8 border-y border-white/[0.05]">
          <div className="flex flex-col items-start">
            <img src={logo} alt="Nestoric Digital" className="h-10 md:h-12 object-contain mb-4" />
            <p className="text-white text-xl font-semibold tracking-wide">Timeless Growth.</p>
          </div>
          <div className="md:text-right border-t border-white/[0.05] md:border-t-0 pt-6 md:pt-0">
            <h3 className="text-2xl font-bold text-white mb-2">Transform Ideas Into Impact.</h3>
            <p className="text-[#7A4DBE] font-semibold text-lg">Partner With Nestoric Digital</p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 mb-12">
          <p className="text-[#A1A1AA] text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nestoric Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#A1A1AA] justify-center md:justify-end w-full md:w-auto">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export function FloatingElements() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-16 md:bottom-18 right-4 md:right-6 z-50  text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        <img src={whatsapp} alt="whatsapp" className="w-16 h-16 md:w-20 md:h-20  object-contain" />
      </a>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-[#050505]/90 backdrop-blur-lg border-t border-white/[0.08] z-40 pb-safe">
        <button onClick={() => setIsModalOpen(true)}
          className="w-full h-12 rounded-lg bg-[#7A4DBE] text-white font-semibold shadow-lg shadow-[#7A4DBE]/25 flex items-center justify-center">
          Get Free Audit
        </button>
      </div>
      {/* Appointment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-md bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 relative pointer-events-auto shadow-2xl"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <h3 className="text-2xl font-bold text-white mb-2">Book an Appointment</h3>
                <p className="text-[#A1A1AA] text-sm mb-6">Fill out the form below and our team will get back to you shortly.</p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Phone</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7A4DBE] transition-colors" placeholder="+91 12345 67890" required />
                  </div>
                  <button type="submit" className="w-full h-12 mt-4 rounded-lg bg-[#7A4DBE] text-white font-semibold hover:bg-[#6a3da8] transition-colors shadow-lg shadow-[#7A4DBE]/25">
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

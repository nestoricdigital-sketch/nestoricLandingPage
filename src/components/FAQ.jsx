import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function FAQ() {
  const faqs = [
    { q: "Why choose Nestoric Digital?", a: "We provide end-to-end solutions for branding, websites, marketing, and growth under one roof. " },
    { q: "Do you work with startups and established businesses?", a: "Yes. We partner with startups, SMEs, and enterprises across industries." },
    { q: "Do you provide website development and digital marketing together?", a: "Absolutely. Our integrated approach ensures consistent branding and measurable growth." },
    { q: "How soon can we start?", a: "Most projects begin with a free consultation and discovery session." },
  ]

  const [open, setOpen] = useState(0)
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden glass-card-hover">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="font-bold text-white text-lg">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 ml-4 text-white">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-8 pb-6 text-[#A1A1AA] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

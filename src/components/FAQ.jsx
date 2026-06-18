import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function FAQ() {
  const faqs = [
    { q: "How soon will I see results?", a: "With paid campaigns (Google/Meta), you can start seeing leads within the first 48-72 hours of launch. SEO typically takes 3-6 months for significant impact." },
    { q: "What is your pricing?", a: "We create custom proposals based on your goals and budget. We focus on ROI, ensuring our fees are more than covered by the additional revenue generated." },
    { q: "Do you work with startups?", a: "Yes, we work with both funded startups and established enterprises, provided they have a proven offer and are ready to scale." },
    { q: "Do you provide reports?", a: "Absolutely. We provide real-time dashboards and weekly check-ins so you always know exactly where your money is going and what it's generating." },
    { q: "Do you manage ad creatives?", a: "Yes, our team handles end-to-end creative production, including ad copy, graphics, and video scripts optimized for conversion." }
  ]

  const [open, setOpen] = useState(0)

  return (
    <section className="py-32 bg-[#050505]">
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

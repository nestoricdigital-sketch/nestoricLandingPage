import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  "Strategic Branding Approach",
  "Performance-Driven Marketing",
  "Premium Website Experiences",
  "Creative + Technology Under One Roof",
  "Transparent Reporting",
  "Dedicated Team Support",
  "AI-Powered Execution",
  "Long-Term Partnership Mindset"
]

export default function WhyNestoric() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradients */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7A4DBE]/10 blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto md:px-6 px-3 relative ">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Why Nestoric Digital
          </motion.h2>
          {/* <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            More Than an Agency. <br />
            <span className="text-[#A1A1AA]">Your Growth Partner.</span>
          </motion.h3> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-start gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="text-[#7A4DBE] w-6 h-6" />
              </div>
              <p className="text-white font-medium text-lg leading-snug">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

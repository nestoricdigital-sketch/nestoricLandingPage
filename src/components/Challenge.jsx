import { motion } from 'framer-motion'
import { AlertCircle, ArrowRight, X } from 'lucide-react'

const struggles = [
  "Lack of Brand Identity",
  "Outdated Websites",
  "Low Quality Leads",
  "Ineffective Marketing Campaigns",
  "Inconsistent Social Media Presence",
  "No Clear Growth Strategy"
]

export default function Challenge() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-y border-white/[0.05]">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7A4DBE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto md:px-6 px-4 relative">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm font-medium text-[#A1A1AA] mb-8"
          >
            <AlertCircle size={16} className="text-[#7A4DBE]" />
            The Challenge
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Growing a Business is Hard. <br className="hidden md:block" />
            <span className="text-[#7A4DBE]">Building a Brand is Even Harder.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Struggles List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 md:p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-md relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Most businesses struggle with:
            </h3>

            <div className="space-y-5">
              {struggles.map((struggle, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mt-0.5">
                    <X size={16} className="text-[#A1A1AA]" />
                  </div>
                  <span className="text-[#A1A1AA] font-medium text-lg leading-relaxed">
                    {struggle}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A4DBE]/20 to-purple-900/20 blur-xl rounded-3xl" />
            <div className="glass-card h-full p-4 md:p-8 md:p-12 rounded-3xl border border-[#7A4DBE]/30 bg-[#7A4DBE]/10 backdrop-blur-md relative flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#7A4DBE] flex items-center justify-center mb-10 shadow-lg shadow-[#7A4DBE]/25 shrink-0">
                <ArrowRight size={32} className="text-white" />
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                That’s Where We Come In.
              </h3>

              <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-medium">
                We help businesses transform into brands that people trust, remember, and choose.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

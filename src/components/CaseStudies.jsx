import { motion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'

export function CaseStudies() {
  return (
    <section className="py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Real Results for Real Brands</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl md:p-8 p-4 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Real Estate Sector
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Scaling premium leads while cutting CPL by 40%.</h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#7A4DBE] mb-1">+312%</div>
                  <div className="text-[#A1A1AA]">Lead Volume</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#7A4DBE] mb-1">4.6x</div>
                  <div className="text-[#A1A1AA]">ROAS</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#7A4DBE] mb-1">-40%</div>
                  <div className="text-[#A1A1AA]">Cost Per Lead</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#7A4DBE] mb-1">90 Days</div>
                  <div className="text-[#A1A1AA]">Timeline</div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A4DBE]/20 blur-3xl rounded-full" />
              <div className="flex justify-between items-end mb-6 border-b border-white/[0.08] pb-4">
                <div>
                  <div className="text-sm text-[#A1A1AA] mb-1">Total Revenue Generated</div>
                  <div className="text-2xl font-bold text-white">₹2.4 Cr</div>
                </div>
                <ArrowUpRight className="text-green-500" size={24} />
              </div>

              {/* Fake Graph */}
              <div className="h-40 flex items-end gap-2">
                {[30, 45, 40, 60, 55, 80, 75, 95, 85, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-[#7A4DBE]/20 to-[#7A4DBE] rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Comparison() {
  const features = [
    { name: 'AI Optimization', others: false, us: true },
    { name: 'Weekly Reporting', others: false, us: true },
    { name: 'Dedicated Manager', others: false, us: true },
    { name: 'ROI Tracking', others: false, us: true },
    { name: 'Custom Strategy', others: false, us: true },
  ]
  // bg-[#0D0D0D] border-y border-white/[0.08]
  return (
    <section className="py-24 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Why Choose Nestoric</h2>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="p-6 text-[#A1A1AA] font-medium">Feature</div>
            <div className="p-6 text-center text-[#A1A1AA] font-medium border-l border-white/[0.08]">Typical Agency</div>
            <div className="p-6 text-center text-[#7A4DBE] font-bold border-l border-white/[0.08]">Nestoric</div>
          </div>

          {features.map((feature, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-white/[0.08] last:border-0 hover:bg-white/[0.02] transition-colors">
              <div className="p-6 text-white font-medium">{feature.name}</div>
              <div className="p-6 border-l border-white/[0.08] flex items-center justify-center">
                {feature.others ? <Check className="text-green-500" /> : <X className="text-[#A1A1AA]/30" />}
              </div>
              <div className="p-6 border-l border-white/[0.08] bg-[#7A4DBE]/5 flex items-center justify-center">
                {feature.us ? <Check className="text-[#7A4DBE]" /> : <X className="text-red-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-32 ">
      {/* Background gradient blob  bg-[#050505] relative overflow-hidden border-t border-white/[0.08]*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#7A4DBE]/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative  text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Ready To Scale Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto"
        >
          Book a free strategy call and discover your biggest growth opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href='https://www.nestoricdigital.com/contact' target='_blank'>
            <button className="h-16 px-4 md:px-10 cursor-pointer rounded-xl bg-[#7A4DBE] text-white font-bold text-xl hover:bg-[#6a3da8] hover:scale-105 transition-all shadow-2xl shadow-[#7A4DBE]/30">
              Get Free Growth Audit
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

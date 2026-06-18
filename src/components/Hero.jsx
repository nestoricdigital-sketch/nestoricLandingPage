import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Check, Sparkles } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export default function Hero() {
  const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[70%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#7A4DBE]/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[0%] w-[30%] h-[30%] rounded-full bg-[#7A4DBE]/10 blur-[100px]" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white mb-8">
            <Sparkles className="text-[#7A4DBE]" size={16} />
            AI-Powered Growth Partner
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Stop Wasting Ad Spend. <br />
            <span className="text-[#A1A1AA]">Start Generating Qualified Leads.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-xl">
            We help businesses scale through Google Ads, Meta Ads, SEO and Conversion-Focused Websites.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-4 mb-10 ">
            {['Free Growth Audit', 'No Long-Term Contracts', 'Dedicated Strategy Team'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center">
                  <Check size={14} className="text-[#7A4DBE]" />
                </div>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.button variants={fadeInUp} className="h-14 px-8 rounded-lg bg-[#7A4DBE] text-white font-semibold text-lg hover:bg-[#6a3da8] hover:scale-[1.02] transition-all shadow-lg shadow-[#7A4DBE]/25">
            Get Free Strategy Session
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:justify-self-end w-full max-w-lg h-full"
        >
          <div className="glass-card  rounded-2xl p-8 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Growth Audit</h3>


            {isSubmitSuccessful ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-[#7A4DBE]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Request Received</h4>
                <p className="text-[#A1A1AA]">We'll be in touch shortly to schedule your audit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input {...register("name", { required: true })} placeholder="Name" className="w-full h-12 px-4 rounded-lg bg-[#0D0D0D] border border-white/[0.08] text-white placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7A4DBE] transition-colors" />
                </div>
                <div>
                  <input {...register("phone", { required: true })} placeholder="Phone" className="w-full h-12 px-4 rounded-lg bg-[#0D0D0D] border border-white/[0.08] text-white placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7A4DBE] transition-colors" />
                </div>
                <div>
                  <input {...register("email", { required: true })} type="email" placeholder="Email" className="w-full h-12 px-4 rounded-lg bg-[#0D0D0D] border border-white/[0.08] text-white placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7A4DBE] transition-colors" />
                </div>
                <div>
                  <input {...register("businessName", { required: true })} placeholder="Business Name" className="w-full h-12 px-4 rounded-lg bg-[#0D0D0D] border border-white/[0.08] text-white placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7A4DBE] transition-colors" />
                </div>
                <div>
                  <select {...register("service", { required: true })} defaultValue="" className="w-full h-12 px-4 rounded-lg bg-[#0D0D0D] border border-white/[0.08] text-[#A1A1AA] focus:outline-none focus:border-[#7A4DBE] transition-colors">
                    <option value="" disabled>Select a Service</option>
                    <option value="website-development">Website Development</option>
                    <option value="app-development">App Development</option>
                    <option value="seo">SEO</option>
                    <option value="social-media-marketing">Social Media Marketing</option>
                    <option value="performance-marketing">Performance Marketing</option>
                    <option value="branding">Branding</option>
                  </select>
                </div>
                <div>
                  <select {...register("budget", { required: true })} defaultValue="" className="w-full h-12 px-4 rounded-lg bg-[#0D0D0D] border border-white/[0.08] text-[#A1A1AA] focus:outline-none focus:border-[#7A4DBE] transition-colors">
                    <option value="" disabled>Monthly Marketing Budget</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
                <button type="submit" className="w-full h-12 mt-4 rounded-lg bg-[#7A4DBE] text-white font-bold hover:bg-[#6a3da8] hover:scale-[1.02] transition-all shadow-lg shadow-[#7A4DBE]/25">
                  Get Free Growth Audit
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

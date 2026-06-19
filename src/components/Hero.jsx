import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Check, Sparkles } from 'lucide-react'
import SideRays from './SideRay'
import TextBlur from './TextBlur'

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
    <section className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-12 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <SideRays rayColor1="#7A4DBE" rayColor2="#A855F7" intensity={2} speed={1.5} origin="top-right" opacity={0.6} className="absolute inset-0 w-full h-full opacity-40 md:opacity-100" />
        {/* <div className="hidden md:block absolute inset-0 w-full h-full">
          <SideRays rayColor1="#38BDF8" rayColor2="#7A4DBE" intensity={1.5} speed={2} origin="bottom-right" opacity={0.4} className="absolute inset-0 w-full h-full" />
        </div> */}

      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[70%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#7A4DBE]/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[0%] w-[30%] h-[30%] rounded-full bg-[#7A4DBE]/10 blur-[100px]" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto w-full md:px-6 grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
        <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }} className='order-2 lg:order-1'>
          <motion.div variants={fadeInUp} className=" hidden lg:inline-flex  items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white mb-8">
            <Sparkles className="text-[#7A4DBE]" size={16} />
            Ready to Turn Your Business Into a Timeless Brand?2
          </motion.div>

          <TextBlur
            text="Nestoric Digital is your end-to-end branding and growth partner, helping ambitious businesses build memorable brands, create exceptional digital experiences, and achieve sustainable growth."
            className="hidden md:block text-xl lg:text-3xl font-bold tracking-tight text-white leading-[1.1]"
          />

          {/* <TextBlur
            text="Start Generating Qualified Leads."
            className="hidden md:block text-2xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          /> */}
          {/* <motion.h1 variants={fadeInUp} className="text-2xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Stop Wasting Ad Spend. <br />
            <span className="text-[#A1A1AA]">Start Generating Qualified Leads.</span>
          </motion.h1> */}



          {/* <motion.p variants={fadeInUp} className="hidden md:block text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-xl">
            We help businesses scale through Google Ads, Meta Ads, SEO and Conversion-Focused Websites.
          </motion.p> */}

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mt-4 mt-2"
          >
            {[
              'Branding & Identity Design',
              'Website Design & Development',
              'Google Ads & Meta Ads',
              'SEO & Social Media Management',
              'Content, Creatives & AI-Powered Growth',
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 shrink-0 rounded-full bg-[#7A4DBE]/20 flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-[#7A4DBE]" />
                </div>

                <span className="text-white font-medium leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.button variants={fadeInUp} className="h-14 px-8 rounded-lg bg-[#7A4DBE] text-white font-semibold text-lg hover:bg-[#6a3da8] hover:scale-[1.02] transition-all shadow-lg shadow-[#7A4DBE]/25">
            Let's Build Your Brand
          </motion.button>

          {/* <motion.button variants={fadeInUp} className="h-14 px-8 rounded-lg bg-[#7A4DBE] text-white font-semibold text-lg hover:bg-[#6a3da8] hover:scale-[1.02] transition-all shadow-lg shadow-[#7A4DBE]/25">
          Start Your Growth Journey
          </motion.button> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" order-1 lg:order-2 relative lg:justify-self-end w-full max-w-lg h-full"
        >
          <motion.div variants={fadeInUp} className=" block md:hidden  inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white mb-8">
            <Sparkles className="text-[#7A4DBE]" size={16} />
            Ready to Turn Your Business Into a Timeless Brand?
          </motion.div>

          <div className="glass-card  rounded-2xl md:p-8 py-8 px-2 relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Get Your Growth Audit</h3>


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
          <div className='block md:hidden mt-4'>
            <TextBlur
              text="Nestoric Digital is your end-to-end branding and growth partner, helping ambitious businesses build memorable brands, create exceptional digital experiences, and achieve sustainable growth."
              className="text-2xl lg:text-3xl font-bold tracking-tight text-white leading-[1.1]"
            />

            {/* <TextBlur
              text=" Ready to Turn Your Business Into a Timeless Brand?."
              className="text-xl lg:text-7xl font-bold tracking-tight text-white leading-[1.5]"
            /> */}
            {/* <TextBlur
              text="Start Generating Qualified Leads."
              className="text-3xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            /> */}
            {/* <motion.h1 variants={fadeInUp} className="text-2xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Stop Wasting Ad Spend. <br />

              <span className="text-[#A1A1AA]">Start Generating Qualified Leads.</span>
            </motion.h1> */}
            {/* 
            <TextBlur className="text-lg text-[#A1A1AA] mb-10 leading-relaxed max-w-xl"
              text=' We help businesses scale through Google Ads, Meta Ads, SEO and Conversion-Focused Websites.
'/> */}
            {/* <motion.p variants={fadeInUp} >
            </motion.p> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

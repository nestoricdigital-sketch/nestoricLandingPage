import { motion } from 'framer-motion'
import CountUpPkg from 'react-countup'
const CountUp = CountUpPkg.default || CountUpPkg
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import cargen from '../assets/icons/cargen_logo.webp';
import cityscape from '../assets/icons/cityscape.webp';
import digic from '../assets/icons/digic_logo.webp';
import eena from '../assets/icons/eena.webp';
import little from '../assets/icons/little.webp';
import mag_op from '../assets/icons/mag_op_logo.webp';
import rak from '../assets/icons/rak.webp';
import ramki from '../assets/icons/ramki.webp';
import reckon from '../assets/icons/reckon.webp';
import simplus from '../assets/icons/simplus_logo.webp';
import suryacity from '../assets/icons/suryacity_logo.webp';
import think from '../assets/icons/think.webp';
import vasura from '../assets/icons/vasura_logo.webp';
import vhs from '../assets/icons/vhs_logo.webp';
import BoxShadow from './BoxShadow'

export function TrustBar() {
  const elements = [
    cargen,
    cityscape,
    digic,
    eena,
    little,
    mag_op,
    rak,
    ramki,
    reckon,
    simplus,
    suryacity,
    think,
    vasura,
    vhs
  ]
  const marqueeContent = [...elements, ...elements]

  return (
    <section className="py-8 overflow-hidden flex items-center relative">
      <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
      <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />
      <div className="flex w-max animate-marquee items-center gap-16 px-8">
        {marqueeContent.map((item, i) => (
          <img src={item} alt="logo" key={i} className="w-52 text-xl font-bold text-[#A1A1AA] whitespace-nowrap" />
        ))}
      </div>
    </section>
  )
}

export function Stats() {
  const stats = [
    { value: 100, suffix: '+', label: 'Projects Delivered' },
    { value: 50, suffix: '+', label: 'Businesses Scaled' },
    { value: 4.9, suffix: '★', label: 'Client Rating', decimals: 1 },
    { value: 10, prefix: '₹', suffix: 'Cr+', label: 'Revenue Influenced' },
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-[#050505]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className=""
          >
            <BoxShadow
              animated
              className="w-full  rounded-2xl p-6 text-center"
              borderRadius={24}
              glowColor="270 80 80"
              backgroundColor="#0D0D0D"
              colors={['#7A4DBE', '#A855F7', '#38BDF8']}
            >
              <div className="text-2xl md:text-5xl font-bold text-white mb-2">
                {stat.prefix}
                {inView ? <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} /> : '0'}
                {stat.suffix}
              </div>
              <div className="text-[#A1A1AA] font-medium">{stat.label}</div>

            </BoxShadow>

          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      text: "Nestoric completely transformed our acquisition strategy. We went from struggling with lead quality to consistently closing high-ticket deals.",
      name: "Arjun Mehta",
      company: "Real Estate Developers"
    },
    {
      text: "The most transparent and results-driven agency we've worked with. The ROI tracking and dedicated strategy team made all the difference.",
      name: "Priya Sharma",
      company: "SaaS Founder"
    },
    {
      text: "Our ROAS doubled within the first 60 days. Their strategic approach and constant optimization helped improve conversions and overall campaign.",
      name: "Rahul K.",
      company: "E-Commerce Director"
    }
  ]

  return (
    <section className="py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Client Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className=""
            >
              <BoxShadow
                animated
                className="w-full  p-8 rounded-2xl glass-card-hover "
                borderRadius={24}
                glowColor="270 80 80"
                backgroundColor="#0D0D0D"
                colors={['#7A4DBE', '#A855F7', '#38BDF8']}
              >

                <div className="flex gap-1 mb-6 text-[#7A4DBE]">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-[#A1A1AA] text-sm">{t.company}</div>
                </div>
              </BoxShadow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

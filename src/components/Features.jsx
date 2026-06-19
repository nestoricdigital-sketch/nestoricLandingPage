import { motion } from 'framer-motion'
import {
  TrendingDown, MousePointerClick, EyeOff, HelpCircle,
  Search,
  Target,
  BarChart3,
  Code,
  Share2,
  Megaphone,
  ShieldCheck
} from "lucide-react"; import BoxShadow from './BoxShadow'
export function PainPoints() {
  const points = [
    { title: 'High Ad Spend', desc: 'Spending more but generating fewer leads.', icon: TrendingDown },
    { title: 'Poor Conversion Rate', desc: "Traffic visits but doesn't convert.", icon: MousePointerClick },
    { title: 'No Tracking', desc: 'No visibility into what works.', icon: EyeOff },
    { title: 'Unpredictable Growth', desc: 'No scalable acquisition system.', icon: HelpCircle },
  ]

  return (
    <section className="py-24  ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Most Marketing Campaigns Fail</h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">Are you experiencing any of these common bottlenecks?</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {points.map((point, i) => (
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
                className="w-full  p-6 rounded-2xl glass-card-hover border border-purple-900 "
                borderRadius={24}
                glowColor="270 80 80"
                backgroundColor="#0D0D0D"
                colors={['#7A4DBE', '#A855F7', '#38BDF8']}
              >
                <div className="w-12 h-12 rounded-xl bg-[#7A4DBE]/10 flex items-center justify-center mb-4 text-red-400">
                  <point.icon size={24} className='text-purple-500' />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-[#A1A1AA]">{point.desc}</p>
              </BoxShadow>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const services = [
    {
      title: "Branding & Identity",
      desc: "Build a memorable brand with logo design, brand strategy, visual identity, and communication systems. ",
      icon: Search,
    },

    {
      title: "SEO & Organic Growth",
      desc: "Improve visibility and attract customers through sustainable search engine optimization.",
      icon: BarChart3,
    },
    {
      title: "Website Design & Development",
      desc: "Create premium, high-converting websites that elevate your brand and drive business growth.",
      icon: Code,
    },
    {
      title: "Social Media Management",
      desc: "Build trust and engagement with consistent content and creative storytelling.",
      icon: Share2,
    },
    {
      title: "Performance Marketing",
      desc: "Improve visibility and attract customers through sustainable search engine optimization.",
      icon: Megaphone,
    },
    {
      title: "Online Reputation Management",
      desc: "Build trust and strengthen your brand with proactive review and reputation management.",
      icon: ShieldCheck,
    },
    {
      title: "Creative Content Production",
      desc: "Posters, Reels, Videos, Motion Graphics, Photography, Drone Shoots, and AI-powered content creation.",
      icon: Target,
    },
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">End-to-End Solutions For Timeless Growth</h2>
        </div>

        <div className="grid md:grid-cols-3 md:gap-6 gap-3">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className=" "
            >
              <BoxShadow
                animated
                className="w-full p-4 md:p-8 rounded-3xl glass-card-hover flex items-start gap-6"
                borderRadius={24}
                glowColor="270 80 80"
                backgroundColor="#0D0D0D"
                colors={['#7A4DBE', '#A855F7', '#38BDF8']}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#7A4DBE]/10 flex items-center justify-center text-[#7A4DBE]">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed text-lg">{service.desc}</p>
                </div>
              </BoxShadow>

            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://www.nestoricdigital.com/services" target='blank' rel='noopener noreferrer'>

            <button className="cursor-pointer h-14 px-8 rounded-lg bg-[#7A4DBE] text-white font-bold text-lg hover:bg-[#6a3da8] hover:scale-[1.02] transition-all shadow-lg shadow-[#7A4DBE]/25">
              Discuss Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    { num: '01', title: 'Discover', desc: 'Understanding your business, audience, and vision.' },
    { num: '02', title: 'Strategize', desc: 'Creating a roadmap for branding, marketing, and growth.' },
    { num: '03', title: 'Build', desc: 'Executing websites, creatives, campaigns, and digital assets.' },
    { num: '04', title: 'Launch', desc: 'Executing campaigns and deploying assets with precision and speed.' },
    { num: '05', title: 'Optimize', desc: 'Continuously improving campaigns and user experiences.' },
    { num: '06', title: 'Scale', desc: 'Helping your business grow sustainably and profitably.' },


  ]
  // bg-[#0D0D0D]
  return (
    <section className="py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Our Process</h2>
          {/* <p>How We Build Brands </p> */}
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7A4DBE]/50 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
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
                  className="w-full relative bg-[#050505] md:p-4 p-2 rounded-2xl border border-white/[0.08] z-10 glass-card-hover"
                  borderRadius={24}
                  glowColor="270 80 80"
                  backgroundColor="#0D0D0D"
                  colors={['#7A4DBE', '#A855F7', '#38BDF8']}
                >
                  <div className="text-5xl font-black text-white/5 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#A1A1AA]">{step.desc}</p>

                </BoxShadow>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

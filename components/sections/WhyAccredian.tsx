'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Globe, Cpu, Layers, Target, Zap } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const features = [
  { icon: Lightbulb, title: 'Tailored Solutions',    desc: 'Programs customized to your goals and industry.' },
  { icon: Users,     title: 'Expert Guidance',        desc: 'Learn from leaders with proven real-world success.' },
  { icon: Globe,     title: 'Innovative Framework',   desc: 'Proprietary methods for application-driven results.' },
  { icon: Cpu,       title: 'Advanced Technology',    desc: 'State-of-the-art LMS for seamless experiences.' },
  { icon: Layers,    title: 'Diverse Offerings',      desc: 'Courses across industries, skill levels and fields.' },
  { icon: Target,    title: 'Proven Impact',           desc: 'Trusted by organizations for measurable ROI.' },
  { icon: Zap,       title: 'Flexible Delivery',       desc: 'Online and offline options tailored to your needs.' },
]

export default function WhyAccredian() {
  return (
    <section id="accredian-edge" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-3">Why choose us</p>
            <h2 className="section-heading">
              The <span className="text-accent-blue">Accredian Edge</span>
            </h2>
            <p className="section-subheading mt-3">
              Key aspects of our strategic training approach.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16,1,0.3,1] }}
                viewport={{ once: true }}
                className="card-base p-5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-accent-blue transition-colors duration-200">
                  <f.icon className="w-5 h-5 text-accent-blue group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-[14.5px] font-semibold text-text-primary mb-1.5 tracking-[-0.01em]">{f.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}

            {/* CTA tile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: features.length * 0.06 }}
              viewport={{ once: true }}
              className="rounded-[14px] bg-accent-blue p-5 flex flex-col justify-between"
            >
              <p className="text-white/80 text-[13px] leading-relaxed mb-4">
                Ready to transform your workforce with cutting-edge training?
              </p>
              <a href="#faqs" className="inline-flex items-center gap-1 text-white text-sm font-semibold hover:gap-2 transition-all">
                Learn more →
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

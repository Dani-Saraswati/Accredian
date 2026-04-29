'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Cog, Settings } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const items = [
  {
    icon: Lightbulb,
    letter: 'C',
    title: 'Concept',
    desc: 'Foundational knowledge for deep subject understanding and strong mental models.',
    color: 'bg-blue-50 text-blue-600',
    ring: 'ring-blue-100',
  },
  {
    icon: Cog,
    letter: 'A',
    title: 'Application',
    desc: 'Practical implementation through real-world scenarios and hands-on projects.',
    color: 'bg-indigo-50 text-indigo-600',
    ring: 'ring-indigo-100',
  },
  {
    icon: Settings,
    letter: 'T',
    title: 'Tools',
    desc: 'Resources and techniques for effective skill mastery and on-the-job performance.',
    color: 'bg-violet-50 text-violet-600',
    ring: 'ring-violet-100',
  },
]

export default function CATFramework() {
  return (
    <section id="cat" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our methodology</p>
            <h2 className="section-heading">
              The <span className="text-accent-blue">CAT Framework</span>
            </h2>
            <p className="section-subheading mt-3">
              Our proven three-pillar approach to learning excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.667%+20px)] right-[calc(16.667%+20px)] h-px bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16,1,0.3,1] }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className={`relative w-20 h-20 rounded-full ${item.color} ring-4 ${item.ring} flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                  <item.icon className="w-8 h-8" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-border text-[11px] font-bold text-text-primary flex items-center justify-center shadow-sm">
                    {item.letter}
                  </span>
                </div>

                {/* Card */}
                <div className="card-base p-6 text-left">
                  <h3 className="text-[15px] font-semibold text-text-primary mb-2 tracking-[-0.01em]">{item.title}</h3>
                  <p className="text-[13.5px] text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

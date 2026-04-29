'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Rocket } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Skill Gap Analysis',
    desc: 'We assess your team\'s current capabilities and identify precise developmental needs to guide the program.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Customized Training Plan',
    desc: 'A tailored roadmap is created addressing your organizational goals, timelines, and industry context.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Flexible Program Delivery',
    desc: 'Programs are delivered online, offline or hybrid — adaptable to your schedule and logistics.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-bg-subtle border-y border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-3">Process</p>
            <h2 className="section-heading">
              How We <span className="text-accent-blue">Deliver Results</span>
            </h2>
            <p className="section-subheading mt-3">
              A structured three-step approach from discovery to delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector */}
          <div className="hidden md:block absolute top-8 left-[calc(33.333%+4px)] right-[calc(33.333%+4px)] h-px border-t-2 border-dashed border-border-md" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center relative z-10">
                    <step.icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.12em] text-text-muted uppercase">{step.num}</span>
                </div>

                <h3 className="text-[15.5px] font-semibold text-text-primary mb-2 tracking-[-0.015em]">{step.title}</h3>
                <p className="text-[13.5px] text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import EnquireModal from '@/components/ui/EnquireModal'

const categories = {
  'About the Course': [
    { q: 'What types of programs does Accredian offer for enterprises?', a: 'Accredian offers programs including Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab. All are customizable to your organization.' },
    { q: 'How are programs customized for our organization?', a: 'Our team conducts a thorough skill gap analysis to understand your team\'s needs. We then create a tailored training roadmap addressing your organizational objectives and industry requirements.' },
    { q: 'What certifications will participants receive?', a: 'Participants receive industry-recognized certifications upon completion. Our certifications are valued across industries and demonstrate proficiency in the skills covered.' },
  ],
  'Delivery': [
    { q: 'How are training programs delivered?', a: 'We offer live online sessions, hybrid formats, and in-person workshops — designed to adapt to your organization\'s preferences and logistical requirements.' },
    { q: 'What is the typical program duration?', a: 'Duration varies from a few weeks to several months depending on depth. We design schedules that minimize operational disruption while maximizing outcomes.' },
    { q: 'Is there ongoing support after training?', a: 'Yes. Post-training support includes learning resources, a dedicated support team, and follow-up sessions to ensure successful implementation.' },
  ],
  'General': [
    { q: 'How do I get started?', a: 'Fill out our enquiry form or email enterprise@accredian.com. Our team will schedule a consultation to guide you through the process.' },
    { q: 'Which industries do you serve?', a: 'We serve IT, Healthcare, Retail, Finance, Education, and Manufacturing — with industry-specific programs for each.' },
    { q: 'How is program success measured?', a: 'Through completion rates, skill assessments, participant feedback, and ROI metrics. Regular reports help you track your team\'s progress.' },
  ],
}

type Cat = keyof typeof categories

export default function FAQ() {
  const [active, setActive] = useState<Cat>('About the Course')
  const [open, setOpen] = useState<number | null>(0)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label mb-3">FAQs</p>
            <h2 className="section-heading">
              Frequently Asked <span className="text-accent-blue">Questions</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Tab bar */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-8">
            {(Object.keys(categories) as Cat[]).map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setOpen(0) }}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150 ${
                  active === cat
                    ? 'bg-accent-blue text-white shadow-sm'
                    : 'bg-bg-subtle text-text-secondary hover:text-text-primary border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={0.1}>
          <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
            {categories[active].map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-bg-subtle transition-colors"
                >
                  <span className="text-[14.5px] font-medium text-text-primary leading-snug">{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bg-muted flex items-center justify-center">
                    {open === i
                      ? <Minus className="w-3.5 h-3.5 text-accent-blue" />
                      : <Plus className="w-3.5 h-3.5 text-text-secondary" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[13.5px] text-text-secondary leading-relaxed bg-bg-subtle">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="text-center mt-12">
            <p className="text-sm text-text-secondary mb-4">Still have questions?</p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              Talk to us
            </button>
          </div>
        </ScrollReveal>
      </div>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

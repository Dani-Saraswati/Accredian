'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import EnquireModal from '@/components/ui/EnquireModal'

const features = ['Tailored Solutions', 'Industry Insights', 'Expert Guidance']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-white"
    >
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f2f5 1px, transparent 1px),
            linear-gradient(to bottom, #f0f2f5 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      {/* Blue glow top-right */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-100/60 blur-[96px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="max-w-xl">

            {/* Eyebrow */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11.5px] font-semibold tracking-wide text-blue-700 uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Enterprise Learning Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-[2.75rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary mb-5"
            >
              Next-Gen Expertise<br />
              <span className="text-accent-blue">For Your Enterprise</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.15)}
              className="text-[1.0625rem] text-text-secondary leading-relaxed mb-8 max-w-[38ch]"
            >
              Cultivate high-performance teams through expert learning, tailored to your goals.
            </motion.p>

            {/* Feature pills */}
            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3 mb-10">
              {features.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary">
                  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-emerald-500">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </span>
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary gap-2"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#how-it-works"
                className="btn-ghost gap-1.5"
              >
                See how it works
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div {...fadeUp(0.35)} className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['photo-1560250097-0b93528c311a', 'photo-1573497019940-1c28c88b4f3e', 'photo-1507003211169-0a1dd7228f2d'].map((id, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-bg-muted">
                    <Image
                      src={`https://images.unsplash.com/${id}?w=64&q=80&fit=crop&auto=format`}
                      alt="learner"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-text-secondary">
                <span className="font-semibold text-text-primary">10K+ professionals</span> trained
              </p>
            </motion.div>
          </div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                alt="Business professionals in a meeting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Floating card — stat */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -bottom-5 -left-6 bg-white rounded-xl p-4 shadow-lg border border-border flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <span className="text-lg">🎓</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium">Sessions delivered</p>
                <p className="text-lg font-bold text-text-primary leading-none mt-0.5">200+</p>
              </div>
            </motion.div>

            {/* Floating portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -right-5 -bottom-10 w-28 h-36 rounded-xl overflow-hidden shadow-lg border-[3px] border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop"
                alt="Professional"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

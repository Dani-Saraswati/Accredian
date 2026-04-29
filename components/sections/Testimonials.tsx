'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
    company: 'ADP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ADP_logo.svg/200px-ADP_logo.svg.png',
  },
  {
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    company: 'Bayer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bayer_Logo.svg/200px-Bayer_Logo.svg.png',
  },
  {
    quote: 'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.',
    company: 'Reliance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Reliance_Industries_Logo.svg/200px-Reliance_Industries_Logo.svg.png',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), [])
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (hovered) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [hovered, next])

  return (
    <section id="testimonials" className="py-24 bg-bg-subtle border-t border-border">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label mb-3">Client testimonials</p>
            <h2 className="section-heading">
              What Our Clients Are <span className="text-accent-blue">Saying</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Card */}
          <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
                className="p-8 md:p-10"
              >
                {/* Quote mark */}
                <svg className="w-8 h-8 text-blue-100 mb-5" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H7.3C7.7 12.4 8.7 11 10 10.3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6.7c.4-1.6 1.4-3 2.7-3.7V8z"/>
                </svg>

                <blockquote className="text-[1.0625rem] text-text-primary font-medium leading-relaxed mb-7">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-8 flex items-center">
                    <Image
                      src={testimonials[current].logo}
                      alt={testimonials[current].company}
                      width={72}
                      height={32}
                      className="h-7 w-auto object-contain opacity-70"
                      unoptimized
                    />
                  </div>
                  <span className="text-[13px] text-text-secondary">Enterprise client</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-text-secondary hover:border-accent-blue hover:text-accent-blue transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 h-1.5 bg-accent-blue' : 'w-1.5 h-1.5 bg-border-md hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-text-secondary hover:border-accent-blue hover:text-accent-blue transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

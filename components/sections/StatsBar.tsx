'use client'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { value: 10,  suffix: 'K+', label: 'Professionals trained',              desc: 'across leading enterprises' },
  { value: 200, suffix: '+',  label: 'Sessions delivered',                 desc: 'with unmatched excellence' },
  { value: 5,   suffix: 'K+', label: 'Active learners',                    desc: 'in dynamic courses today' },
]

export default function StatsBar() {
  return (
    <section id="stats" className="py-20 bg-bg-subtle border-y border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center py-10 sm:py-6 px-8">
                <div className="text-[2.75rem] font-bold tracking-[-0.04em] text-accent-blue leading-none mb-1.5">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[15px] font-semibold text-text-primary mb-0.5">{s.label}</p>
                <p className="text-[13px] text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Rocket, Brain, Users, Database, Settings, Globe, Banknote, Monitor, GraduationCap, CheckCircle, XCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

const domains = [
  { icon: Rocket,    title: 'Product & Innovation Hub',  desc: 'Drive excellence and innovation.' },
  { icon: Brain,     title: 'Gen-AI Mastery',             desc: 'Master generative AI applications.' },
  { icon: Users,     title: 'Leadership Elevation',       desc: 'Develop strategic leadership skills.' },
  { icon: Database,  title: 'Tech & Data Insights',       desc: 'Harness data for business insights.' },
  { icon: Settings,  title: 'Operations Excellence',      desc: 'Optimize and drive efficiency.' },
  { icon: Globe,     title: 'Digital Enterprise',         desc: 'Transform with digital strategies.' },
  { icon: Banknote,  title: 'Fintech Innovation Lab',     desc: 'Explore financial tech solutions.' },
]

const segments = [
  { title: 'Program Specific',  sub: 'Certificate · Executive · PG Certificate',  img: 'photo-1552664730-d307ca884978' },
  { title: 'Industry Specific', sub: 'IT · Healthcare · Retail · Finance',         img: 'photo-1485827404703-89b55fcc595e' },
  { title: 'Topic Specific',    sub: 'ML · Design · Analytics · Cybersecurity',    img: 'photo-1531482615713-2afd69097998' },
  { title: 'Level Specific',    sub: 'Senior Leadership · Mid-Career · Freshers',  img: 'photo-1600880292089-90a7e086ee0c' },
]

const audience = [
  { icon: Monitor,       title: 'Tech Professionals',     desc: 'Enhance expertise and drive innovation.', ok: true },
  { icon: Users,         title: 'Non-Tech Professionals', desc: 'Adapt digitally, collaborate in tech.',   ok: true },
  { icon: Rocket,        title: 'Emerging Professionals', desc: 'Develop skills for rapid career growth.', ok: true },
  { icon: GraduationCap, title: 'Senior Professionals',  desc: 'Strengthen leadership and strategy.',     ok: false },
]

export default function Programs() {
  return (
    <section className="py-24 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-24">

        {/* Domain Expertise */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-3">Domain expertise</p>
              <h2 className="section-heading">
                Programs Designed to <span className="text-accent-blue">Fuel Innovation</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {domains.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="card-base bg-white p-5 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-accent-blue transition-colors duration-200">
                    <d.icon className="w-5 h-5 text-accent-blue group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-text-primary mb-1.5 tracking-[-0.01em]">{d.title}</h3>
                  <p className="text-[13px] text-text-secondary">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Course Segmentation */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-3">Course segmentation</p>
              <h2 className="section-heading">
                Tailored for Every <span className="text-accent-blue">Professional Focus</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {segments.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="card-base bg-white overflow-hidden group"
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-bg-muted">
                    <Image
                      src={`https://images.unsplash.com/${s.img}?w=400&q=75&auto=format&fit=crop`}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[14.5px] font-semibold text-accent-blue mb-1">{s.title}</h4>
                    <p className="text-[12.5px] text-text-secondary">{s.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Who Should Join */}
        <ScrollReveal>
          <div className="rounded-2xl bg-accent-blue overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left */}
              <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-widest text-blue-200 uppercase mb-2">Audience</p>
                  <h3 className="text-2xl font-bold text-white leading-tight tracking-[-0.02em] mb-4">
                    Strategic Skill<br />Enhancement
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Programs built for every level of professional growth.
                  </p>
                </div>
                <div className="mt-8 relative w-36 h-44 rounded-xl overflow-hidden hidden sm:block">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80&auto=format&fit=crop"
                    alt="Professional"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-3 bg-white/5 p-8 lg:p-10 grid sm:grid-cols-2 gap-5">
                {audience.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${a.ok ? 'bg-white' : 'bg-white/15'}`}>
                      {a.ok
                        ? <CheckCircle className="w-5 h-5 text-accent-blue" />
                        : <XCircle className="w-5 h-5 text-white/60" />
                      }
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-white mb-0.5">{a.title}</h4>
                      <p className="text-[13px] text-blue-100/80 leading-snug">{a.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

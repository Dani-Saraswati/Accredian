'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

const clients = [
  { name: 'Reliance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Reliance_Industries_Logo.svg/200px-Reliance_Industries_Logo.svg.png', w: 110 },
  { name: 'HCL',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/HCL_Technologies_logo.svg/200px-HCL_Technologies_logo.svg.png', w: 72 },
  { name: 'IBM',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png', w: 64 },
  { name: 'ADP',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/ADP_logo.svg/200px-ADP_logo.svg.png', w: 72 },
  { name: 'Bayer',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bayer_Logo.svg/200px-Bayer_Logo.svg.png', w: 72 },
  { name: 'CRIF',     logo: 'https://www.crif.com/wp-content/uploads/2020/09/crif-logo.png', w: 72 },
]

export default function LogoMarquee() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-label mb-3">Trusted by the best</p>
            <h2 className="section-heading">
              Our Proven <span className="text-accent-blue">Partnerships</span>
            </h2>
            <p className="section-subheading mt-3">
              Collaborations with industry leaders who trust us to upskill their teams.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={c.w}
                  height={40}
                  className="h-9 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

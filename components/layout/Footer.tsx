'use client'

import { useState } from 'react'
import Link from 'next/link'
import EnquireModal from '@/components/ui/EnquireModal'

const links = {
  Product: [
    { label: 'Programs',        href: '#accredian-edge' },
    { label: 'CAT Framework',   href: '#cat' },
    { label: 'How It Works',    href: '#how-it-works' },
    { label: 'Testimonials',    href: '#testimonials' },
  ],
  Company: [
    { label: 'About',           href: '#' },
    { label: 'Blog',            href: '#' },
    { label: 'Contact Us',      href: '#' },
    { label: 'Privacy Policy',  href: '#' },
  ],
}

const socials = [
  { label: 'LinkedIn', href: '#', svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
  { label: 'Twitter',  href: '#', svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
  { label: 'YouTube',  href: '#', svg: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
]

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="font-bold text-xl tracking-tight text-accent-blue">accredian</span>
            </Link>
            <p className="text-[13.5px] text-text-secondary leading-relaxed mb-5 max-w-[26ch]">
              Empowering enterprises to upskill their workforce with industry-leading training.
            </p>

            <div className="space-y-1.5 mb-6 text-[13px] text-text-secondary">
              <p>
                <span className="text-text-muted">Email: </span>
                <a href="mailto:enterprise@accredian.com" className="hover:text-accent-blue transition-colors">
                  enterprise@accredian.com
                </a>
              </p>
              <p className="text-[12.5px] text-text-muted leading-relaxed max-w-[32ch]">
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-bg-subtle border border-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-blue-200 transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-4">Get Started</h4>
            <p className="text-[13px] text-text-secondary mb-4 leading-relaxed">
              Ready to transform your workforce?
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary text-sm px-4 py-2"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12.5px] text-text-muted">
            © 2026 Accredian · A Brand of FullStack Education Pvt Ltd.
          </p>
          <p className="text-[12.5px] text-text-muted">
            All Rights Reserved.
          </p>
        </div>
      </div>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  )
}

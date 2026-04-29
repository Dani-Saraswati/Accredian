'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import EnquireModal from '@/components/ui/EnquireModal'

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'Stats',          href: '#stats' },
  { label: 'Clients',        href: '#clients' },
  { label: 'Accredian Edge', href: '#accredian-edge' },
  { label: 'CAT',            href: '#cat' },
  { label: 'How It Works',   href: '#how-it-works' },
  { label: 'FAQs',           href: '#faqs' },
  { label: 'Testimonials',   href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [modalOpen,      setModalOpen]      = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = [...navLinks].reverse()
      for (const link of sections) {
        const el = document.getElementById(link.href.replace('#', ''))
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(link.href.replace('#', ''))
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'h-14 bg-white/90 backdrop-blur-md border-b border-border shadow-sm'
            : 'h-16 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 select-none">
            <span className="font-bold text-xl tracking-tight text-accent-blue">accredian</span>
            <span className="text-[11px] text-text-muted font-medium hidden sm:block">credentials that matter</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '')
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                    active
                      ? 'text-accent-blue'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-blue-50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary hidden sm:inline-flex text-sm px-4 py-2"
            >
              Enquire Now
            </button>
            <button
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-subtle transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 36 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white border-l border-border shadow-xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                <span className="font-bold text-base text-accent-blue">accredian</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md text-text-secondary hover:bg-bg-subtle"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-accent-blue bg-blue-50'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <button
                  onClick={() => { setMobileOpen(false); setModalOpen(true) }}
                  className="btn-primary w-full"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

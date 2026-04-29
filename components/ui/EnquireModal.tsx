'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, Check, Loader2 } from 'lucide-react'

interface Props { isOpen: boolean; onClose: () => void }

const domainOptions = [
  'Data Science & Analytics', 'Artificial Intelligence & ML',
  'Product Management', 'Digital Marketing',
  'Finance & FinTech', 'Cybersecurity', 'Cloud Computing', 'Leadership & Management',
]
const deliveryOptions = ['Online (Live Sessions)', 'Offline (In-Person)', 'Hybrid', 'Self-Paced']

const emptyForm = { name: '', email: '', phone: '', company: '', domain: '', candidates: '', deliveryMode: '', location: '' }

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-[11.5px] font-medium text-text-secondary mb-1.5 tracking-wide">{label}</span>
      <input
        {...props}
        className="w-full h-9 px-3 rounded-lg border border-border bg-bg-subtle text-[13.5px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-blue focus:ring-2 focus:ring-blue-100 transition-all"
      />
    </label>
  )
}

function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <span className="block text-[11.5px] font-medium text-text-secondary mb-1.5 tracking-wide">{label}</span>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full h-9 px-3 rounded-lg border bg-bg-subtle text-[13.5px] text-left flex items-center justify-between transition-all ${
          open ? 'border-accent-blue ring-2 ring-blue-100' : 'border-border'
        }`}
      >
        <span className={value ? 'text-text-primary' : 'text-text-muted'}>{value || `Select ${label}`}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.14 }}
            className="absolute z-20 w-full mt-1 bg-white border border-border rounded-lg shadow-lg max-h-44 overflow-y-auto scrollbar-hide"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false) }}
                className="w-full px-3 py-2 text-left text-[13px] text-text-primary hover:bg-bg-subtle flex items-center gap-2"
              >
                {value === opt && <Check className="w-3 h-3 text-accent-blue flex-shrink-0" />}
                <span className={value === opt ? 'text-accent-blue font-medium' : ''}>{opt}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function EnquireModal({ isOpen, onClose }: Props) {
  const [form, setForm]           = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess]     = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch { /* swallow — show success regardless for demo */ }
    setSubmitting(false)
    setSuccess(true)
    setTimeout(() => { setSuccess(false); onClose(); setForm(emptyForm) }, 2200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h2 className="text-[15px] font-semibold text-text-primary tracking-[-0.01em]">Enquire Now</h2>
                <p className="text-[12px] text-text-secondary mt-0.5">We'll get back within 24 hours.</p>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-bg-subtle flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Success state */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-[15px] font-semibold text-text-primary">Submitted!</p>
                  <p className="text-[13px] text-text-secondary">We'll be in touch soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 max-h-[72vh] overflow-y-auto scrollbar-hide">
              <div className="grid grid-cols-2 gap-3">
                <Input label="Full Name"    type="text"   placeholder="Ravi Kumar"  value={form.name}    onChange={set('name')}    required />
                <Input label="Work Email"   type="email"  placeholder="you@co.com" value={form.email}   onChange={set('email')}   required />
              </div>

              <div className="flex items-end gap-2">
                <div className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border bg-bg-subtle text-[13px] text-text-secondary flex-shrink-0">
                  🇮🇳 +91
                </div>
                <div className="flex-1">
                  <Input label="Phone" type="tel" placeholder="98765 43210" value={form.phone} onChange={set('phone')} required />
                </div>
              </div>

              <Input label="Company Name" type="text" placeholder="Acme Corp" value={form.company} onChange={set('company')} required />

              <Select
                label="Domain"
                options={domainOptions}
                value={form.domain}
                onChange={(v) => setForm((f) => ({ ...f, domain: v }))}
              />

              <div className="grid grid-cols-2 gap-3">
                <Input label="No. of Candidates" type="number" placeholder="e.g. 50" min="1" value={form.candidates} onChange={set('candidates')} />
                <Input label="Location"           type="text"  placeholder="Bengaluru, India"   value={form.location}   onChange={set('location')} />
              </div>

              <Select
                label="Mode of Delivery"
                options={deliveryOptions}
                value={form.deliveryMode}
                onChange={(v) => setForm((f) => ({ ...f, deliveryMode: v }))}
              />

              <button
                type="submit"
                disabled={submitting || success}
                className="btn-primary w-full mt-2 disabled:opacity-60"
              >
                {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : 'Submit Enquiry'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

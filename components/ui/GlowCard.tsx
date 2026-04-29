import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div
      className={`bg-card border border-border-subtle rounded-2xl p-8 transition-all duration-300 hover:border-accent-blue/40 hover:shadow-[0_8px_32px_rgba(79,110,247,0.15)] ${className}`}
    >
      {children}
    </div>
  )
}

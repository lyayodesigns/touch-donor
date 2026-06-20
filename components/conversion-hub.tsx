'use client'

import { motion } from 'framer-motion'

const valueProps = [
  {
    text: 'No hardware lock‑in – works with your existing screens',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.55)',
  },
  {
    text: 'Cloud‑based, always up‑to‑date',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.55)',
  },
  {
    text: 'Accessible and ADA compliant',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.55)',
  },
]

const trustBadges = [
  { icon: '🏆', text: 'Emmy® Award Nominee for UI/UX' },
  { icon: '♿', text: 'WCAG 2.1 AA Compliant' },
  { icon: '⚡', text: '99.9% Uptime Guarantee' },
  { icon: '🎓', text: 'Trusted by Brown University, University of New Hampshire, and 100+ K‑12 schools' },
]

const ctaButtons = [
  {
    label: 'Request a Demo',
    style: {
      background: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)',
      color: '#ffffff',
      boxShadow: '0 8px 32px rgba(139,92,246,0.45)',
      cursor: 'pointer',
    },
    hoverShadow: '0 12px 40px rgba(139,92,246,0.6)',
    primary: true,
  }
]

export function ConversionHub() {
  return (
    <section
      id="cta"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F0A2A 0%, #1A0F3A 50%, #120830 100%)' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F472B6 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FBBF24 0%, transparent 70%)' }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(196,181,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.18)',
              border: '1px solid rgba(196,181,253,0.35)',
              color: '#C4B5FD',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse inline-block" />
            Get Started Today
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white mb-6">
            Ready to Transform Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Recognition?
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(196,181,253,0.75)' }}
          >
            Join 100+ leading institutions using TouchDonor to engage alumni, honour donors, and preserve legacy.
          </p>
        </motion.div>

        {/* Value propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-14"
        >
          {valueProps.map((prop, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: 'rgba(26,16,60,0.6)',
                border: `1px solid ${prop.glow.replace('0.55', '0.25')}`,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: prop.gradient, boxShadow: `0 4px 12px ${prop.glow.replace('0.55', '0.4')}` }}
              >
                ✓
              </span>
              <span className="text-sm font-medium" style={{ color: 'rgba(221,214,254,0.9)' }}>
                {prop.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {ctaButtons.map((btn, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200"
              style={btn.style}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="w-full h-px mb-12 mx-auto max-w-2xl"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(196,181,253,0.2), transparent)' }}
        />

     

      </div>
    </section>
  )
}

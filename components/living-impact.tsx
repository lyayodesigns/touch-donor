'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consult',
    description:
      'We assess your goals — hall of fame, donor wall, alumni platform, or archives — and tailor a solution that fits your institution perfectly.',
    icon: '🤝',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.55)',
    tagColor: '#C4B5FD',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our Emmy‑nominated design team creates a custom interface that reflects your brand identity and deeply engages your audience.',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.55)',
    tagColor: '#FBCFE8',
  },
  {
    number: '03',
    title: 'Upload',
    description:
      'We help you digitise your content: photos, videos, biographies, donor lists, and historical records — fully guided and stress‑free.',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.55)',
    tagColor: '#FDE68A',
  },
  {
    number: '04',
    title: 'Deploy',
    description:
      'Install on your existing touchscreens or new hardware. Go live with cloud‑based content management and real‑time updates from day one.',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.55)',
    tagColor: '#A7F3D0',
  },
  {
    number: '05',
    title: 'Grow',
    description:
      'Add new inductees, donors, and stories effortlessly. Update in real‑time, track analytics, and keep your recognition always fresh.',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.55)',
    tagColor: '#BFDBFE',
  },
]

export function LivingImpact() {
  const containerRef = useRef(null)

  return (
    <section
      id="impact"
      ref={containerRef}
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F0A2A 0%, #1A0F3A 50%, #120830 100%)' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #34D399 0%, transparent 70%)' }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(196,181,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.18)',
              border: '1px solid rgba(196,181,253,0.35)',
              color: '#C4B5FD',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse inline-block" />
            How It Works
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white">
            Your Journey to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Digital Recognition
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(196,181,253,0.75)' }}
          >
            Five simple steps from first conversation to a living, breathing recognition platform.
          </p>
        </motion.div>

        {/* Steps — vertical timeline on mobile, alternating zigzag on desktop */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(139,92,246,0.0) 0%, rgba(139,92,246,0.4) 15%, rgba(244,114,182,0.4) 50%, rgba(96,165,250,0.4) 85%, rgba(96,165,250,0.0) 100%)',
            }}
          />

          <div className="space-y-10 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row md:items-center gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${i !== steps.length - 1 ? 'md:mb-16' : ''}`}
                >
                  {/* Content card — left or right half */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="relative rounded-2xl p-7 overflow-hidden"
                      style={{
                        background: 'linear-gradient(145deg, rgba(26,16,60,0.92) 0%, rgba(18,10,44,0.92) 100%)',
                        border: `1px solid ${step.glow.replace('0.55', '0.25')}`,
                        backdropFilter: 'blur(16px)',
                        boxShadow: `0 8px 32px ${step.glow.replace('0.55', '0.15')}`,
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                        style={{ background: step.gradient }}
                      />

                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                          style={{
                            background: step.gradient,
                            boxShadow: `0 6px 20px ${step.glow.replace('0.55', '0.4')}`,
                          }}
                        >
                          {step.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xl md:text-2xl font-heading font-bold mb-2 leading-snug"
                            style={{ color: '#F5F3FF' }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: 'rgba(196,181,253,0.65)' }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Centre node */}
                  <div className="hidden md:flex w-24 shrink-0 justify-center items-center relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                      viewport={{ once: true }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-black text-lg shadow-xl"
                      style={{
                        background: step.gradient,
                        boxShadow: `0 0 0 6px rgba(15,10,42,1), 0 0 0 8px ${step.glow.replace('0.55', '0.35')}, 0 8px 24px ${step.glow.replace('0.55', '0.4')}`,
                        color: '#fff',
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Mobile step badge */}
                  <div
                    className="md:hidden flex items-center gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-sm text-white shrink-0"
                      style={{ background: step.gradient }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="flex-1 h-px"
                      style={{ background: `linear-gradient(90deg, ${step.glow.replace('0.55','0.4')}, transparent)` }}
                    />
                  </div>

                  {/* Empty right/left half spacer */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

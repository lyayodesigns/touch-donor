'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const capabilities = [
  {
    title: 'Digital Hall of Fame',
    description:
      'Showcase unlimited inductees with rich multimedia profiles — photos, videos, stats, and biographies. Organise by induction year, sport, achievement type, or custom categories. Fully searchable and accessible on touchscreens and mobile.',
    icon: '🏆',
    badge: '01',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.5)',
    tagColor: '#C4B5FD',
  },
  {
    title: 'Interactive Donor Walls',
    description:
      'Recognise every giving level with dynamic visuals. Update donor names in real‑time at zero incremental cost. Tell impact stories through embedded videos and testimonials. Display campaign progress to motivate further gifts.',
    icon: '🎖️',
    badge: '02',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.5)',
    tagColor: '#FBCFE8',
  },
  {
    title: 'Alumni Engagement Hub',
    description:
      'Reconnect graduates with a searchable alumni directory. Share success stories, achievements, and class notes. Drive alumni giving by showcasing the visible impact of their contributions.',
    icon: '🎓',
    badge: '03',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.5)',
    tagColor: '#FDE68A',
  },
  {
    title: 'School Legacy & Archives',
    description:
      'Digitise yearbooks, photos, newspaper clippings, and memorabilia. Build a permanent, accessible digital archive that preserves your institution\'s history for future generations. Create interactive exhibits for visitors.',
    icon: '📚',
    badge: '04',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.5)',
    tagColor: '#A7F3D0',
  },
  {
    title: 'Intelligent Content Management',
    description:
      'Cloud‑based CMS lets you add, edit, or remove content in minutes — no coding required. Schedule updates, manage multiple displays, and track engagement analytics from a single dashboard.',
    icon: '⚡',
    badge: '05',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.5)',
    tagColor: '#BFDBFE',
  },
]

export function CapabilitiesCards() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="capabilities"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 60%, #EDE9FE 100%)' }}
    >
      {/* Ambient soft blobs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.18) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
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
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.25)',
              color: '#6C5CE7',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse inline-block" />
            Platform Capabilities
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            Powerful Capabilities for{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Modern Recognition
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            Everything you need to celebrate legacy, inspire giving, and connect your community — all from one cloud‑based platform.
          </p>
        </motion.div>

        {/* Cards — 2-col grid, last card full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => {
            const isLastOdd = i === capabilities.length - 1 && capabilities.length % 2 !== 0
            const isHovered = hovered === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                viewport={{ once: true }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className={`relative group cursor-default${isLastOdd ? ' md:col-span-2' : ''}`}
              >
                <div
                  className="relative h-full rounded-2xl p-7 md:p-8 overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                    border: `1px solid ${isHovered ? cap.glow.replace('0.5', '0.35') : 'rgba(139,92,246,0.12)'}`,
                    backdropFilter: 'blur(12px)',
                    boxShadow: isHovered
                      ? `0 20px 50px ${cap.glow.replace('0.5', '0.2')}, 0 0 0 1px ${cap.glow.replace('0.5', '0.15')}`
                      : '0 2px 16px rgba(139,92,246,0.07)',
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{
                      background: cap.gradient,
                      opacity: isHovered ? 1 : 0.5,
                      transition: 'opacity 0.3s',
                    }}
                  />

                  <div className={`flex gap-6 ${isLastOdd ? 'md:items-center' : 'items-start'}`}>
                    {/* Icon */}
                    <div className="shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{
                          background: cap.gradient,
                          boxShadow: isHovered
                            ? `0 8px 28px ${cap.glow.replace('0.5', '0.45')}`
                            : `0 4px 14px ${cap.glow.replace('0.5', '0.25')}`,
                        }}
                      >
                        {cap.icon}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Number + divider */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-[10px] font-black tracking-[0.2em] px-2 py-0.5 rounded"
                          style={{
                            background: cap.glow.replace('0.5', '0.1'),
                            color: cap.glow.replace('rgba', 'rgb').replace(',0.5)', ')'),
                            border: `1px solid ${cap.glow.replace('0.5', '0.3')}`,
                          }}
                        >
                          {cap.badge}
                        </span>
                        <div
                          className="flex-1 h-px"
                          style={{ background: `linear-gradient(90deg, ${cap.glow.replace('0.5', '0.25')}, transparent)` }}
                        />
                      </div>

                      <h3
                        className="text-xl md:text-2xl font-heading font-bold mb-3 leading-snug"
                        style={{ color: '#1E1B4B' }}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className="leading-relaxed text-sm md:text-base"
                        style={{ color: '#4C1D95' }}
                      >
                        {cap.description}
                      </p>

                      {/* Learn more */}
                      <motion.div
                        initial={false}
                        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                        transition={{ duration: 0.22 }}
                        className="mt-5 pt-4"
                        style={{ borderTop: `1px solid ${cap.glow.replace('0.5', '0.15')}` }}
                      >
                        <button
                          className="flex items-center gap-2 text-sm font-semibold"
                          style={{ color: cap.glow.replace('rgba', 'rgb').replace(',0.5)', ')') }}
                        >
                          Learn more
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                            style={{ background: cap.gradient }}
                          >
                            →
                          </span>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

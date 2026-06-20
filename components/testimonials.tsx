'use client'

import { motion } from 'framer-motion'

const highlights = [
  {
    stat: '3×',
    label: 'Alumni Engagement',
    description: 'Schools report higher reunion attendance and giving after launching digital halls of fame.',
    accentColor: '#8B5CF6',
    accentLight: 'rgba(139,92,246,0.08)',
    accentBorder: 'rgba(139,92,246,0.2)',
  },
  {
    stat: '90%',
    label: 'Faster Donor Updates',
    description: 'Add new donors within minutes instead of months with real-time cloud management.',
    accentColor: '#F472B6',
    accentLight: 'rgba(244,114,182,0.08)',
    accentBorder: 'rgba(244,114,182,0.2)',
  },
  {
    stat: '75%',
    label: 'Visitor Interaction Rate',
    description: 'Touchscreen displays attract and hold attention far longer than static walls.',
    accentColor: '#F59E0B',
    accentLight: 'rgba(245,158,11,0.08)',
    accentBorder: 'rgba(245,158,11,0.2)',
  },
  {
    stat: '24/7',
    label: 'Global Accessibility',
    description: 'Recognition content available from any device, reaching families and alumni worldwide.',
    accentColor: '#10B981',
    accentLight: 'rgba(16,185,129,0.08)',
    accentBorder: 'rgba(16,185,129,0.2)',
  },
]

const analytics = [
  { value: '100+', label: 'Institutions' },
  { value: '8,400+', label: 'Inductees Added' },
  { value: '12,600+', label: 'Donors Recognised' },
  { value: '1.2M+', label: 'Engagement Hours' },
]

export function Testimonials() {
  return (
    <section
      id="proven-impact"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 60%, #EDE9FE 100%)' }}
    >
      {/* Decorative soft blobs */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[110px] opacity-35 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full blur-[90px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Two-column split: heading left, stat stack right ── */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">

          {/* Left: heading block */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="lg:w-[42%] lg:sticky lg:top-24"
          >
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(139,92,246,0.08)',
                border: '1px solid rgba(139,92,246,0.22)',
                color: '#6D28D9',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse inline-block" />
              Proven Impact
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-tight mb-6"
              style={{ color: '#1E1B4B' }}
            >
              The Impact of{' '}
              <span
                className="bg-clip-text text-transparent block"
                style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 50%, #F472B6 100%)' }}
              >
                Digital Recognition
              </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: '#6D28D9' }}>
              Real numbers from institutions that have transformed their recognition experience with TouchDonor.
            </p>

            {/* Vertical divider rule with gradient */}
            <div
              className="w-16 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #F472B6)' }}
            />
          </motion.div>

          {/* Right: numbered highlight rows */}
          <div className="lg:w-[58%] flex flex-col gap-0">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex items-start gap-6 py-8"
                style={{
                  borderBottom: i < highlights.length - 1
                    ? '1px solid rgba(139,92,246,0.1)'
                    : 'none',
                }}
              >
                {/* Large background stat watermark */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[6rem] font-heading font-black leading-none select-none pointer-events-none opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.07]"
                  style={{ color: item.accentColor }}
                >
                  {item.stat}
                </div>

                {/* Index number */}
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black tracking-wider mt-1"
                  style={{
                    background: item.accentLight,
                    border: `1px solid ${item.accentBorder}`,
                    color: item.accentColor,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Stat + label row */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="text-4xl font-heading font-black leading-none"
                      style={{ color: item.accentColor }}
                    >
                      {item.stat}
                    </span>
                    <span
                      className="text-base font-semibold"
                      style={{ color: '#1E1B4B' }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#6D28D9' }}>
                    {item.description}
                  </p>
                </div>

                {/* Hover accent line on left edge */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.accentColor }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Analytics band ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1E1B4B 0%, #2E1C5A 50%, #1E1B4B 100%)',
          }}
        >
          {/* Subtle inner grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Bottom gradient accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: 'linear-gradient(90deg, #8B5CF6, #F472B6, #FBBF24, #34D399)' }}
          />

          <div className="relative z-10 px-8 md:px-14 py-12">
            <p
              className="text-center text-xs font-bold tracking-[0.25em] uppercase mb-10"
              style={{ color: 'rgba(196,181,253,0.55)' }}
            >
              Analytics Snapshot
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {analytics.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.09 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Separator between items (desktop) */}
                  {i < analytics.length - 1 && (
                    <div
                      className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-10"
                      style={{ background: 'rgba(196,181,253,0.15)' }}
                    />
                  )}
                  <p
                    className="text-4xl md:text-5xl font-heading font-black mb-2 leading-none"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 50%, #F9A8D4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {item.value}
                  </p>
                  <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'rgba(196,181,253,0.6)' }}>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

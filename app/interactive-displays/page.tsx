'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Script from 'next/script'

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function IDHero() {
  return (
    <section
      className="w-full pt-32 pb-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/digital-donor-recognition.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark + colour overlay for faded effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(160deg, rgba(10,6,20,0.78) 0%, rgba(20,8,45,0.74) 50%, rgba(15,5,30,0.80) 100%)',
        }}
      />

      {/* Ambient blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(173, 169, 184, 0.35) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(141, 139, 146, 0.2) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.20)',
              border: '1px solid rgba(196,181,253,0.45)',
              color: '#b9b6c9',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse inline-block" />
            Interactive Display Software
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Interactive{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #9489ad 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Touchscreen Displays
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ color: '#E9D5FF' }}>
            Transform visitor engagement with TouchDonor&apos;s interactive display software. Touchscreen kiosks,
            digital signage, and recognition displays for schools and nonprofits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact/#request-demo"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)',
                boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
              }}
            >
              Request a Demo
            </motion.a>
            <motion.a
              href="#solution"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-3.5 rounded-full font-semibold border"
              style={{
                border: '1px solid rgba(196,181,253,0.5)',
                color: '#E9D5FF',
                background: 'rgba(139,92,246,0.15)',
              }}
            >
              See How It Works
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 1 — The Problem ───────────────────────────────────────────── */
const problems = [
  {
    text: 'Passive, not engaging — visitors glance and walk away',
    gradient: 'linear-gradient(135deg, #FF7675 0%, #FD4A4A 100%)',
    glow: 'rgba(255,118,117,0.5)',
  },
  {
    text: 'Quickly outdated — information becomes obsolete, but updates are expensive and slow',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.5)',
  },
  {
    text: 'Limited content — you can only fit so much on a plaque or in a case',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.5)',
  },
  {
    text: 'No interactivity — visitors can\'t explore, search, or discover',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.5)',
  },
  {
    text: 'Inaccessible — content is only available to those physically present',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.5)',
  },
  {
    text: 'No analytics — you have no idea what visitors engage with',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.5)',
  },
]

function ProblemSection() {
  return (
    <section
      id="problem"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 60%, #EDE9FE 100%)' }}
    >
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(255,118,117,0.08)',
              border: '1px solid rgba(255,118,117,0.3)',
              color: '#DC2626',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7675] animate-pulse inline-block" />
            The Problem
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            Static Displays,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #FF7675 0%, #F472B6 100%)' }}
            >
              Disengaged Audiences
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            Walk into most school lobbies, alumni centers, or donor recognition spaces, and what do you see? Static
            plaques. Framed photos. Outdated trophy cases. Displays that were installed years ago and haven&apos;t been
            updated since.
          </p>
        </motion.div>

        {/* Two-column layout: context left, problems right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — narrative block */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(139,92,246,0.12)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(139,92,246,0.07)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: 'linear-gradient(135deg, #FF7675 0%, #F472B6 100%)', boxShadow: '0 6px 20px rgba(255,118,117,0.35)' }}
              >
                🖥️
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4" style={{ color: '#1E1B4B' }}>
                The Cost of Static Displays Is Real
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4C1D95' }}>
                Missed opportunities to tell your story. Visitors who leave unimpressed. Donors and alumni who feel
                underrecognized.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4C1D95' }}>
                The global interactive display market is growing at 7.8% CAGR, driven by increasing adoption of
                interactive learning tools and digital signage solutions. In 2026, organizations are moving beyond
                traditional &ldquo;screen + playlist&rdquo; signage toward experiential engagement.
              </p>
            </div>
          </motion.div>

          {/* Right — problem list */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-xl px-5 py-4"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: `1px solid ${p.glow.replace('0.5', '0.2')}`,
                  backdropFilter: 'blur(12px)',
                  boxShadow: `0 4px 16px ${p.glow.replace('0.5', '0.08')}`,
                }}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black"
                  style={{ background: p.gradient, boxShadow: `0 4px 12px ${p.glow.replace('0.5', '0.4')}` }}
                >
                  ✕
                </span>
                <span className="text-sm md:text-base font-medium" style={{ color: '#1E1B4B' }}>
                  {p.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2 — The Solution ──────────────────────────────────────────── */
const features = [
  {
    title: 'Touchscreen Interactivity',
    benefit: 'Visitors tap, swipe, and explore — discovery becomes part of the experience',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.55)',
  },
  {
    title: 'Rich Multimedia Content',
    benefit: 'Photos, videos, audio, and text — stories come to life',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.55)',
  },
  {
    title: 'Search & Discovery',
    benefit: 'Visitors find exactly what they\'re looking for — donors, alumni, inductees, or history',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.55)',
  },
  {
    title: 'Cloud-Based CMS',
    benefit: 'Update content in minutes from anywhere — no coding required',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.55)',
  },
  {
    title: 'Unlimited Scalability',
    benefit: 'Display thousands of profiles with zero incremental cost',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.55)',
  },
  {
    title: 'Mobile Accessibility',
    benefit: 'Every profile has a shareable URL — content available anywhere',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #DDD6FE 100%)',
    glow: 'rgba(167,139,250,0.55)',
  },
  {
    title: 'Analytics & Insights',
    benefit: 'See what visitors engage with — measure what matters',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FBBF24 100%)',
    glow: 'rgba(244,114,182,0.55)',
  },
  {
    title: 'ADA Compliant',
    benefit: 'WCAG 2.1 AA compliant — accessible to all visitors',
    gradient: 'linear-gradient(135deg, #34D399 0%, #60A5FA 100%)',
    glow: 'rgba(52,211,153,0.55)',
  },
]

function SolutionSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="solution"
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
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
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
            The Solution
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white">
            Interactive Touchscreen Displays{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              That Engage
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(196,181,253,0.75)' }}>
            TouchDonor&apos;s interactive display software transforms passive observation into active exploration. Our
            Emmy-nominated platform turns any commercial-grade touchscreen into a dynamic, engaging experience that
            captivates visitors and tells your story.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const isLastOdd = i === features.length - 1 && features.length % 3 === 1
            const isHovered = hovered === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                viewport={{ once: true }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className={`relative group cursor-default${isLastOdd ? ' lg:col-span-3' : ''}`}
              >
                <div
                  className="relative h-full rounded-2xl p-7 overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(145deg, rgba(30,18,70,0.98) 0%, rgba(22,12,55,0.98) 100%)'
                      : 'linear-gradient(145deg, rgba(26,16,60,0.85) 0%, rgba(18,10,44,0.85) 100%)',
                    border: `1px solid ${feat.glow.replace('0.55', isHovered ? '0.4' : '0.2')}`,
                    backdropFilter: 'blur(16px)',
                    boxShadow: isHovered
                      ? `0 20px 50px ${feat.glow.replace('0.55', '0.25')}, 0 0 0 1px ${feat.glow.replace('0.55', '0.15')}`
                      : `0 4px 20px ${feat.glow.replace('0.55', '0.1')}`,
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{ background: feat.gradient, opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.3s' }}
                  />

                  <div className={`flex gap-5 ${isLastOdd ? 'lg:items-center' : 'items-start'}`}>
                    <div className="shrink-0">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                        style={{
                          background: feat.gradient,
                          boxShadow: isHovered
                            ? `0 8px 28px ${feat.glow.replace('0.55', '0.5')}`
                            : `0 4px 14px ${feat.glow.replace('0.55', '0.3')}`,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-heading font-bold mb-2 leading-snug" style={{ color: '#F5F3FF' }}>
                        {feat.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(196,181,253,0.7)' }}>
                        {feat.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center rounded-2xl px-8 py-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(139,92,246,0.12) 0%, rgba(244,114,182,0.08) 100%)',
            border: '1px solid rgba(196,181,253,0.2)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.04) 0%, rgba(244,114,182,0.04) 100%)' }}
          />
          <p className="text-lg md:text-xl font-semibold relative z-10" style={{ color: 'rgba(221,214,254,0.9)' }}>
            The result?{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #F9A8D4)' }}
            >
              Visitors who stay longer, engage deeper, and leave with a lasting impression. Recognition that actually works.
            </span>
          </p>
        </motion.div>

        {/* Related Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <motion.a
            href="/donor-recognition-walls/"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl p-6 overflow-hidden block"
            style={{
              background: 'linear-gradient(145deg, rgba(26,16,60,0.85) 0%, rgba(18,10,44,0.85) 100%)',
              border: '1px solid rgba(139,92,246,0.2)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' }}
              >
                🏆
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold mb-2" style={{ color: '#F5F3FF' }}>
                  Digital Donor Recognition
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(196,181,253,0.7)' }}>
                  Interactive donor wall software that tells impact stories and inspires continued philanthropy.
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            href="/alumni-engagement/"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl p-6 overflow-hidden block"
            style={{
              background: 'linear-gradient(145deg, rgba(26,16,60,0.85) 0%, rgba(18,10,44,0.85) 100%)',
              border: '1px solid rgba(244,114,182,0.2)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)' }}
              >
                🎓
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold mb-2" style={{ color: '#F5F3FF' }}>
                  Alumni Engagement Solutions
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(196,181,253,0.7)' }}>
                  Reconnect graduates and drive alumni giving with digital recognition and storytelling.
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 3 — Use Cases & Implementation ────────────────────────────── */
const useCases = [
  {
    title: 'School Lobbies & Welcome Centers',
    description:
      'Interactive displays that welcome visitors, showcase school achievements, and tell the story of your institution. Digital directories, event calendars, and recognition walls all in one place.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.5)',
    badge: '01',
  },
  {
    title: 'Athletic Halls of Fame',
    description:
      'Touchscreen displays that bring athletic history to life — championship teams, legendary athletes, record holders, and memorable moments. Visitors explore at their own pace.',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.5)',
    badge: '02',
  },
  {
    title: 'Alumni Centers',
    description:
      'Interactive alumni recognition that celebrates graduate achievements and reconnects former students. Searchable directories, success stories, and digital archives.',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.5)',
    badge: '03',
  },
  {
    title: 'Donor Recognition Spaces',
    description:
      'Interactive donor walls that tell impact stories, showcase giving levels, and build momentum for future campaigns.',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.5)',
    badge: '04',
  },
  {
    title: 'School History & Archives',
    description:
      'Digital exhibits that preserve and share institutional history — yearbooks, photos, newspaper clippings, and memorabilia — all accessible through touchscreen exploration.',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.5)',
    badge: '05',
  },
]

function UseCasesSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="use-cases"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 60%, #EDE9FE 100%)' }}
    >
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.18) 0%, transparent 70%)' }}
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
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.25)',
              color: '#6C5CE7',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse inline-block" />
            Use Cases & Implementation
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            Purpose-Built for{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Every Space
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            TouchDonor&apos;s interactive display software serves a wide range of applications across educational and
            nonprofit settings.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((uc, i) => {
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
                className="relative group cursor-default"
              >
                <div
                  className="relative h-full rounded-2xl p-7 md:p-8 overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                    border: `1px solid ${isHovered ? uc.glow.replace('0.5', '0.35') : 'rgba(139,92,246,0.12)'}`,
                    backdropFilter: 'blur(12px)',
                    boxShadow: isHovered
                      ? `0 20px 50px ${uc.glow.replace('0.5', '0.2')}, 0 0 0 1px ${uc.glow.replace('0.5', '0.15')}`
                      : '0 2px 16px rgba(139,92,246,0.07)',
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: uc.gradient, opacity: isHovered ? 1 : 0.5, transition: 'opacity 0.3s' }}
                  />

                  <div className="flex gap-6 items-start">
                    <div className="shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-heading font-black text-white"
                        style={{
                          background: uc.gradient,
                          boxShadow: isHovered
                            ? `0 8px 28px ${uc.glow.replace('0.5', '0.45')}`
                            : `0 4px 14px ${uc.glow.replace('0.5', '0.25')}`,
                        }}
                      >
                        {uc.badge}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex-1 h-px"
                          style={{ background: `linear-gradient(90deg, ${uc.glow.replace('0.5', '0.25')}, transparent)` }}
                        />
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-heading font-bold mb-3 leading-snug"
                        style={{ color: '#1E1B4B' }}
                      >
                        {uc.title}
                      </h3>
                      <p className="leading-relaxed text-sm md:text-base" style={{ color: '#4C1D95' }}>
                        {uc.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Hardware compatibility note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center rounded-2xl px-8 py-6"
          style={{
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(139,92,246,0.15)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p className="text-base md:text-lg font-medium" style={{ color: '#4C1D95' }}>
            <span className="font-bold" style={{ color: '#1E1B4B' }}>Hardware Compatibility:</span>{' '}
            TouchDonor works with any commercial-grade touchscreen display — use what you have or work with our
            recommended partners.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 4 — Implementation Journey ────────────────────────────────── */
const journeySteps = [
  {
    number: '01',
    title: 'Consult',
    description: 'We understand your space, audience, and goals',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.55)',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Custom interface that reflects your brand',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.55)',
  },
  {
    number: '03',
    title: 'Content',
    description: 'We help digitize and organize your content',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.55)',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Install on your existing displays or new hardware',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.55)',
  },
  {
    number: '05',
    title: 'Manage',
    description: 'Update content instantly through our cloud CMS',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.55)',
  },
]

function JourneySection() {
  return (
    <section
      id="journey"
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
            Implementation Journey
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white">
            From First Call to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Live Displays
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(196,181,253,0.75)' }}>
            Five simple steps to transform your static displays into dynamic, interactive experiences that captivate
            visitors.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(139,92,246,0.0) 0%, rgba(139,92,246,0.4) 15%, rgba(244,114,182,0.4) 50%, rgba(96,165,250,0.4) 85%, rgba(96,165,250,0.0) 100%)',
            }}
          />

          <div className="space-y-10 md:space-y-0">
            {journeySteps.map((step, i) => {
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
                  } ${i !== journeySteps.length - 1 ? 'md:mb-16' : ''}`}
                >
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
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                        style={{ background: step.gradient }}
                      />
                      <div className="flex items-start gap-4">
                        <div
                          className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-heading font-black text-lg text-white"
                          style={{ background: step.gradient, boxShadow: `0 6px 20px ${step.glow.replace('0.55', '0.4')}` }}
                        >
                          {step.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-heading font-bold mb-2" style={{ color: '#F5F3FF' }}>
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(196,181,253,0.65)' }}>
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
                  <div className="md:hidden flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-sm text-white shrink-0"
                      style={{ background: step.gradient }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="flex-1 h-px"
                      style={{ background: `linear-gradient(90deg, ${step.glow.replace('0.55', '0.4')}, transparent)` }}
                    />
                  </div>

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

/* ─── CTA Section ───────────────────────────────────────────────────────── */
function IDConversionHub() {
  return (
    <section
      id="get-started"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 60%, #EDE9FE 100%)' }}
    >
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.18) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid rgba(139,92,246,0.25)',
              color: '#6C5CE7',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse inline-block" />
            Ready to Get Started?
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            Bring Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Displays to Life
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: '#4C1D95' }}>
            Join leading institutions using TouchDonor to transform static displays into interactive experiences that
            captivate visitors and tell your story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 rounded-full font-semibold text-white text-base"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)',
                boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
              }}
            >
              Request a Demo
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 rounded-full font-semibold text-base border"
              style={{
                border: '1px solid rgba(139,92,246,0.35)',
                color: '#6C5CE7',
                background: 'rgba(139,92,246,0.06)',
              }}
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function InteractiveDisplaysPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Interactive Touchscreen Displays',
    description: 'Transform visitor engagement with TouchDonor\'s interactive display software. Touchscreen kiosks, digital signage, and recognition displays for schools and nonprofits.',
    brand: {
      '@type': 'Brand',
      name: 'TouchDonor',
    },
    category: 'Interactive Display Software',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Educational Institutions, Nonprofit Organizations',
    },
    featureList: [
      'Touchscreen Interactivity',
      'Rich Multimedia Content',
      'Search & Discovery',
      'Cloud-Based CMS',
      'Unlimited Scalability',
      'Mobile Accessibility',
      'Analytics & Insights',
      'ADA Compliant',
    ],
  }

  return (
    <main className="w-full bg-background">
      <Script
        id="structured-data-interactive-displays"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <IDHero />
      <ProblemSection />
      <SolutionSection />
      <UseCasesSection />
      <JourneySection />
      <IDConversionHub />
      <Footer />
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Script from 'next/script'

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function AEHero() {
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
            Digital Alumni Engagement
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Alumni{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #9489ad 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Engagement Platform
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ color: '#E9D5FF' }}>
            Reconnect graduates and drive alumni giving with TouchDonor&apos;s digital alumni engagement platform.
            Interactive recognition, storytelling, and community building for schools.
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
    text: 'Outdated contact information — you can\'t engage alumni you can\'t reach',
    gradient: 'linear-gradient(135deg, #FF7675 0%, #FD4A4A 100%)',
    glow: 'rgba(255,118,117,0.5)',
  },
  {
    text: 'No compelling recognition — achievements go unnoticed, connections fade',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.5)',
  },
  {
    text: 'Manual, fragmented systems — spreadsheets, siloed databases, and inconsistent communication',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.5)',
  },
  {
    text: 'No visible impact — alumni don\'t see the difference their engagement makes',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.5)',
  },
  {
    text: 'Declining participation — giving rates and event attendance continue to drop',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.5)',
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
            Disconnected Alumni,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #FF7675 0%, #F472B6 100%)' }}
            >
              Missed Potential
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            Alumni are your institution&apos;s greatest asset — and your most underutilized resource. Yet most schools
            struggle with the same challenges: outdated contact information, no compelling recognition, fragmented
            systems, and declining participation. The cost? Lost donations, missed mentorship opportunities, and a
            weakening alumni network that erodes institutional reputation and enrollment.
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
                🎓
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4" style={{ color: '#1E1B4B' }}>
                The Cost of Disconnected Alumni Is Real
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4C1D95' }}>
                Lost donations. Missed mentorship opportunities. A weakening alumni network that erodes institutional
                reputation and enrollment.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4C1D95' }}>
                By 2026, alumni engagement is increasingly evaluated not just as relationship-building, but as a career
                outcomes strategy that directly affects enrollment and institutional success.
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
    title: 'Digital Alumni Hall of Fame',
    benefit: 'Recognize outstanding alumni with rich multimedia profiles — photos, videos, achievements, and career highlights',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.55)',
  },
  {
    title: 'Searchable Alumni Directory',
    benefit: 'Help graduates reconnect with classmates through an intuitive, searchable database',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.55)',
  },
  {
    title: 'Success Story Showcase',
    benefit: 'Share alumni achievements that inspire current students and strengthen institutional pride',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.55)',
  },
  {
    title: 'Interactive Recognition Displays',
    benefit: 'Touchscreen installations in lobbies, libraries, and athletic facilities that celebrate alumni year-round',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.55)',
  },
  {
    title: 'Cloud-Based Content Management',
    benefit: 'Update alumni profiles and stories instantly — no technical expertise required',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.55)',
  },
  {
    title: 'Permanent Digital Archives',
    benefit: 'Preserve alumni achievements and institutional history for future generations',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #DDD6FE 100%)',
    glow: 'rgba(167,139,250,0.55)',
  },
  {
    title: 'Mobile Accessibility',
    benefit: 'Every alumni profile has a shareable URL — recognition available anywhere, anytime',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FBBF24 100%)',
    glow: 'rgba(244,114,182,0.55)',
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
            A Digital Alumni Engagement{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Platform That Works
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(196,181,253,0.75)' }}>
            TouchDonor&apos;s alumni engagement platform reconnects graduates, celebrates achievements, and drives
            meaningful participation — all through interactive digital experiences.
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
          <p className="text-lg md:text-xl font-semibold relative z-10 mb-4" style={{ color: 'rgba(221,214,254,0.9)' }}>
            The result?{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #F9A8D4)' }}
            >
              Alumni who feel seen, valued, and connected. Stronger giving, mentorship, and advocacy. And an institutional legacy that endures.
            </span>
          </p>
          <p className="text-base md:text-lg italic relative z-10" style={{ color: 'rgba(196,181,253,0.6)' }}>
            &ldquo;The shift from platforms to outcomes is not a trend. It is the new baseline.&rdquo;
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
                  Donor Recognition Walls
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(196,181,253,0.7)' }}>
                  Digital donor recognition that tells impact stories and inspires continued philanthropy.
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            href="/interactive-displays/"
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
                🖥️
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold mb-2" style={{ color: '#F5F3FF' }}>
                  Interactive Touchscreen Displays
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(196,181,253,0.7)' }}>
                  Transform visitor engagement with touchscreen kiosks and digital signage solutions.
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
    label: 'Colleges & Universities',
    title: 'Colleges & Universities',
    description:
      'Digital alumni halls of fame that celebrate distinguished graduates. Interactive displays at reunion events that reconnect classmates. Mobile-accessible recognition that keeps alumni engaged long after they leave campus.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.5)',
    badge: '01',
  },
  {
    label: 'K-12 Schools',
    title: 'K-12 Schools',
    description:
      'Alumni achievement walls that inspire current students. School history preservation that connects generations. Digital archives of yearbooks, photos, and memorabilia that alumni can explore from anywhere.',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.5)',
    badge: '02',
  },
  {
    label: 'Athletic Departments',
    title: 'Athletic Departments',
    description:
      'Athletic halls of fame that honor legendary athletes and teams. Interactive displays in stadiums and training facilities that celebrate athletic legacy and recruit future talent.',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.5)',
    badge: '03',
  },
  {
    label: 'Alumni Associations',
    title: 'Alumni Associations',
    description:
      'Centralized platforms for alumni communication, event promotion, and giving campaigns. Recognition that drives participation and strengthens community.',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.5)',
    badge: '04',
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
              Every Institution
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            TouchDonor&apos;s alumni engagement platform serves institutions of all sizes. Here&apos;s how different
            organizations are using it.
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
      </div>
    </section>
  )
}

/* ─── Section 4 — The Alumni Engagement Journey ─────────────────────────── */
const journeySteps = [
  {
    number: '01',
    title: 'Audit',
    description: 'We assess your alumni data and engagement goals',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.55)',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Custom recognition experiences tailored to your institution',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.55)',
  },
  {
    number: '03',
    title: 'Upload',
    description: 'We help digitize alumni records, achievements, and stories',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.55)',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Launch on touchscreens, mobile, and web',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.55)',
  },
  {
    number: '05',
    title: 'Engage',
    description: 'Track analytics, update content, and watch engagement grow',
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
            The Engagement Journey
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white">
            From First Call to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Lasting Connection
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(196,181,253,0.75)' }}>
            Five simple steps to transform your alumni engagement from fragmented outreach to a thriving, connected community.
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
function AEConversionHub() {
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
            Reconnect Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Alumni Community
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: '#4C1D95' }}>
            Join leading institutions using TouchDonor to reconnect graduates, celebrate achievements, and drive
            meaningful alumni engagement.
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
export default function AlumniEngagementPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Alumni Engagement Platform',
    description: 'Reconnect graduates and drive alumni giving with TouchDonor\'s digital alumni engagement platform. Interactive recognition, storytelling, and community building for schools.',
    brand: {
      '@type': 'Brand',
      name: 'TouchDonor',
    },
    category: 'Alumni Engagement Software',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Educational Institutions, Alumni Associations',
    },
    featureList: [
      'Digital Alumni Hall of Fame',
      'Searchable Alumni Directory',
      'Success Story Showcase',
      'Interactive Recognition Displays',
      'Cloud-Based Content Management',
      'Permanent Digital Archives',
      'Mobile Accessibility',
    ],
  }

  return (
    <main className="w-full bg-background">
      <Script
        id="structured-data-alumni-engagement"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <AEHero />
      <ProblemSection />
      <SolutionSection />
      <UseCasesSection />
      <JourneySection />
      <AEConversionHub />
      <Footer />
    </main>
  )
}

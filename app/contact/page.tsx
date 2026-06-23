'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function GetStartedHero() {
  return (
    <section
      className="w-full pt-32 pb-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0F0A2A 0%, #1A0F3A 50%, #120830 100%)',
      }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)' }}
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
            Get Started
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Let&apos;s Build Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #9489ad 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Donor Experience
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ color: '#E9D5FF' }}>
            Request a personalized demo or reach out to our team. We&apos;ll help you transform donor recognition
            into an interactive, lasting experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#request-demo"
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
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-3.5 rounded-full font-semibold border"
              style={{
                border: '1px solid rgba(196,181,253,0.5)',
                color: '#E9D5FF',
                background: 'rgba(139,92,246,0.15)',
              }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 1 — Request a Demo ────────────────────────────────────────── */
function RequestDemoSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="request-demo"
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

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
            Request a Demo
          </div>

          <h2
            className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            See TouchDonor{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              in Action
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            Schedule a personalized walkthrough. We&apos;ll show you how to launch your interactive donor
            recognition wall in days — not months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(139,92,246,0.15)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(139,92,246,0.08)',
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
                style={{
                  background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                  boxShadow: '0 8px 28px rgba(52,211,153,0.4)',
                }}
              >
                ✓
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3" style={{ color: '#1E1B4B' }}>
                Thank You!
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4C1D95' }}>
                We&apos;ve received your demo request. Our team will reach out within 24 hours to schedule
                your personalized walkthrough.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1E1B4B' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      background: 'rgba(245,243,255,0.6)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#1E1B4B',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1E1B4B' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@institution.edu"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      background: 'rgba(245,243,255,0.6)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#1E1B4B',
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1E1B4B' }}>
                    Institution
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your organization"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      background: 'rgba(245,243,255,0.6)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#1E1B4B',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1E1B4B' }}>
                    Role
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      background: 'rgba(245,243,255,0.6)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#1E1B4B',
                    }}
                  >
                    <option>Development / Advancement</option>
                    <option>Marketing / Communications</option>
                    <option>IT / Technology</option>
                    <option>Leadership / Executive</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1E1B4B' }}>
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="What are you looking to achieve with digital donor recognition?"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition resize-none"
                  style={{
                    background: 'rgba(245,243,255,0.6)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    color: '#1E1B4B',
                  }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-full font-semibold text-white text-base"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)',
                  boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                }}
              >
                Request Demo
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Section 2 — Contact ───────────────────────────────────────────────── */
function ContactSection() {
  const contactCards = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'hello@touchdonor.com',
      description: 'General inquiries & support',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
      glow: 'rgba(139,92,246,0.5)',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon–Fri, 9am–6pm EST',
      gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
      glow: 'rgba(244,114,182,0.5)',
    },
    {
      icon: '📍',
      label: 'Office',
      value: '100 Innovation Way, Suite 200',
      description: 'San Francisco, CA 94107',
      gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
      glow: 'rgba(251,191,36,0.5)',
    },
  ]

  return (
    <section
      id="contact"
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
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
              background: 'rgba(139,92,246,0.18)',
              border: '1px solid rgba(196,181,253,0.35)',
              color: '#C4B5FD',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse inline-block" />
            Contact Us
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-white">
            Get in{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(196,181,253,0.75)' }}>
            Have questions? We&apos;re here to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative group cursor-default"
            >
              <div
                className="relative h-full rounded-2xl p-7 overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(145deg, rgba(26,16,60,0.85) 0%, rgba(18,10,44,0.85) 100%)',
                  border: `1px solid ${card.glow.replace('0.5', '0.2')}`,
                  backdropFilter: 'blur(16px)',
                  boxShadow: `0 4px 20px ${card.glow.replace('0.5', '0.1')}`,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: card.gradient, opacity: 0.6, transition: 'opacity 0.3s' }}
                />

                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: card.gradient,
                      boxShadow: `0 4px 14px ${card.glow.replace('0.5', '0.3')}`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1" style={{ color: '#F5F3FF' }}>
                      {card.label}
                    </h3>
                    <p className="text-sm font-medium mb-1" style={{ color: 'rgba(196,181,253,0.9)' }}>
                      {card.value}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(196,181,253,0.6)' }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Response time callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center rounded-2xl px-8 py-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(139,92,246,0.12) 0%, rgba(244,114,182,0.08) 100%)',
            border: '1px solid rgba(196,181,253,0.2)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <p className="text-lg font-semibold relative z-10" style={{ color: 'rgba(221,214,254,0.9)' }}>
            Average response time:{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA, #F9A8D4)' }}
            >
              under 24 hours
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function GetStartedPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <GetStartedHero />
      <RequestDemoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

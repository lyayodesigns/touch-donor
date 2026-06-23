'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function FAQHero() {
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
            FAQ
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Frequently Asked{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #9489ad 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Questions
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ color: '#E9D5FF' }}>
            Everything you need to know about TouchDonor&apos;s digital recognition platform, from compatibility to accessibility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── FAQ Section ───────────────────────────────────────────────────────── */
function FAQSection() {
  const faqs = [
    {
      question: 'What is TouchDonor?',
      answer: 'TouchDonor is a digital recognition platform that provides interactive display software for donor walls, hall of fame systems, alumni engagement, and school legacy preservation.',
    },
    {
      question: 'Who uses TouchDonor?',
      answer: 'K‑12 schools, colleges, universities, athletic departments, and nonprofit organisations – from elite private schools to large public universities.',
    },
    {
      question: 'Is TouchDonor compatible with our existing displays?',
      answer: 'Yes. TouchDonor works with any commercial‑grade touchscreen or standard display. You can also use our recommended hardware partners.',
    },
    {
      question: 'How do we add new inductees or donors?',
      answer: 'Through our intuitive cloud‑based CMS – upload content in minutes, no coding required. Updates go live instantly across all displays and mobile views.',
    },
    {
      question: 'Does TouchDonor support accessibility?',
      answer: 'Absolutely. Our platform is WCAG 2.1 AA compliant, with screen‑reader compatibility, high‑contrast modes, and keyboard navigation.',
    },
  ]

  return (
    <section
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

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            Frequently Asked{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(139,92,246,0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(139,92,246,0.08)',
              }}
            >
              <h3
                className="text-lg md:text-xl font-heading font-bold mb-3"
                style={{ color: '#1E1B4B' }}
              >
                Q: {faq.question}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#6D28D9' }}>
                A: {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function FAQPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <FAQHero />
      <FAQSection />
      <Footer />
    </main>
  )
}

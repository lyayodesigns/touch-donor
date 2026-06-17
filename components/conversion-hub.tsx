'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function ConversionHub() {
  const [donors, setDonors] = useState(100000)

  useEffect(() => {
    let animationFrameId: number
    const startTime = Date.now()
    const targetDonors = 150000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const duration = 4000
      const progress = Math.min(elapsed / duration, 1)
      setDonors(Math.floor(100000 + (targetDonors - 100000) * progress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="w-full bg-background py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-heading font-bold text-foreground mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of donors saving lives every day. Your contribution matters.
          </p>

          {/* Counter */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur mb-8">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-semibold">Active Donors: {donors.toLocaleString('en-US')}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
            >
              Start Donating Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition"
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">✓</span> HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">✓</span> ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-primary">✓</span> FDA Registered
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeroCanvasDynamic = dynamic(() => import('./hero-canvas').then(mod => ({ default: mod.HeroCanvas })), {
  ssr: false,
})

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-background overflow-hidden">
      {/* Canvas Background */}
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      }>
        <div className="absolute inset-0">
          <HeroCanvasDynamic />
        </div>
      </Suspense>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Global Donor Network Live</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            Connect Lives Through{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            TouchDonor revolutionizes blood and organ donation with real-time matching, secure coordination, and transparent impact tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-opacity-90 transition"
            >
              Start Donating
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="text-primary text-center">
          <div className="text-sm font-medium mb-2">Scroll to explore</div>
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

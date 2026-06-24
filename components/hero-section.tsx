'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from 'react'

const HeroCanvasDynamic = dynamic(() => import('./hero-canvas').then(mod => ({ default: mod.HeroCanvas })), {
  ssr: false,
})

const stats = [
  { label: 'Institutions Served', value: '100+' },
  { label: 'Active Displays', value: '2,400+' },
  { label: 'Alumni Reconnected', value: '150,000+' },
  { label: 'Uptime Guarantee', value: '99.9%' },
]

export function HeroSection() {
  return (
    <div className="relative w-full bg-background overflow-hidden">
      <section className="relative w-full h-screen overflow-hidden">
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
            {/* <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-[#FDCB6E] animate-pulse" />
              <span className="text-sm font-medium" style={{ background: 'linear-gradient(135deg, #FDCB6E, #F39C12)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Emmy‑Nominated Technology
              </span>
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Honor Your Legacy.{' '}
              <span className="bg-gradient-to-r from-[#6C5CE7] via-[#A29BFE] to-[#FD79A8] bg-clip-text text-transparent">
                Engage Your Community.
              </span>{' '}
              Inspire Your Future.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              TouchDonor delivers Emmy‑nominated interactive display software that helps schools, universities, and nonprofits celebrate achievements, recognise donors, preserve institutional history, and connect alumni – all from one cloud‑based platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/solutions/"
                  className="inline-block px-8 py-3.5 rounded-full font-semibold text-white transition shadow-lg shadow-[#6C5CE7]/25 hover:shadow-[#6C5CE7]/40"
                  style={{ background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)' }}
                >
                  Explore Solutions
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/demo/"
                  className="inline-block px-8 py-3.5 rounded-full border border-[#6C5CE7]/50 text-[#A29BFE] font-semibold hover:bg-[#6C5CE7]/10 transition backdrop-blur"
                >
                  View Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="text-muted-foreground text-center">
            <div className="text-sm font-medium mb-2">Scroll to explore</div>
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full border-t border-[#6C5CE7]/15"
        style={{ background: 'linear-gradient(135deg, rgba(108,92,231,0.06) 0%, rgba(162,155,254,0.04) 50%, rgba(253,121,168,0.06) 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#6C5CE7]/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 + i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4 py-2"
            >
              <span
                className="text-3xl md:text-4xl font-heading font-bold mb-1"
                style={{ background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

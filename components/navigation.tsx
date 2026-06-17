'use client'

import { motion } from 'framer-motion'

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-foreground font-bold text-sm">TD</span>
          </div>
          <span className="font-bold text-xl text-foreground">TouchDonor</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition text-sm font-medium">
            Problem
          </a>
          <a href="#capabilities" className="text-muted-foreground hover:text-foreground transition text-sm font-medium">
            Capabilities
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition text-sm font-medium">
            Impact
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition text-sm font-medium">
            Testimonials
          </a>
        </div>

        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-opacity-90 transition">
          Get Started
        </button>
      </div>
    </motion.nav>
  )
}

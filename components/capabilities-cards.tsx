'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function CapabilitiesCards() {
  const [hovered, setHovered] = useState<number | null>(null)

  const capabilities = [
    {
      title: 'Real-Time Matching',
      description: 'AI-powered algorithm matches donors and recipients in seconds with 99.8% accuracy',
      gradient: 'from-primary/20 to-transparent',
      icon: '🔗',
      color: '#00F0FF',
    },
    {
      title: 'Secure Coordination',
      description: 'Military-grade encryption ensures all medical data stays protected and confidential',
      gradient: 'from-secondary/20 to-transparent',
      icon: '🔒',
      color: '#FF3B80',
    },
    {
      title: 'Impact Tracking',
      description: 'Monitor your donation impact in real-time with detailed, transparent analytics',
      gradient: 'from-accent/20 to-transparent',
      icon: '📊',
      color: '#FFB347',
    },
    {
      title: '24/7 Support',
      description: 'Expert team available round-the-clock to guide you through every step',
      gradient: 'from-primary/20 via-secondary/20 to-transparent',
      icon: '💬',
      color: '#00F0FF',
    },
  ]

  return (
    <section id="capabilities" className="w-full bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold text-foreground mb-4">Powerful Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make a difference, powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{ background: `linear-gradient(135deg, ${cap.color}20 0%, transparent 100%)` }}
              />

              <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-border transition-colors bg-card/50 backdrop-blur-sm">
                <div className="text-5xl mb-4">{cap.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>

                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-border/50"
                  >
                    <button className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition">
                      Learn more
                      <span>→</span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export function TrustBar() {
  const stats = [
    { label: 'Lives Saved', value: '50K+', icon: '❤️' },
    { label: 'Active Donors', value: '100K+', icon: '👥' },
    { label: 'Countries', value: '25+', icon: '🌍' },
    { label: 'Success Rate', value: '99.8%', icon: '✓' },
  ]

  return (
    <section className="w-full bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

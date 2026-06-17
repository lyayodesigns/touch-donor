'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Transplant Surgeon',
      text: 'TouchDonor has revolutionized how we coordinate organ donations. The matching algorithm is incredible.',
      color: '#00F0FF',
    },
    {
      name: 'Marcus Johnson',
      title: 'Recipient',
      text: 'My life was transformed. The platform made everything so transparent and trustworthy.',
      color: '#FF3B80',
    },
    {
      name: 'Elena Rodriguez',
      title: 'Active Donor',
      text: 'Seeing the impact of my donation in real-time is the most rewarding experience of my life.',
      color: '#FFB347',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="w-full bg-background py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold text-foreground mb-4">Real Stories, Real Impact</h2>
          <p className="text-xl text-muted-foreground">
            Hear from donors, recipients, and medical professionals
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-12 text-center"
            style={{
              borderColor: testimonials[current].color + '40',
              boxShadow: `0 0 20px ${testimonials[current].color}20`,
            }}
          >
            <p className="text-2xl text-foreground mb-8 leading-relaxed">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[current].title}</p>
            </div>
          </motion.div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-2 rounded-full transition-all"
                animate={{
                  width: current === i ? 32 : 8,
                  backgroundColor: current === i ? '#00F0FF' : '#1A2332',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

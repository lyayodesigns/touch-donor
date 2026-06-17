'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function LivingImpact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])

  const stages = [
    {
      number: 1,
      title: 'Register',
      description: 'Create your donor profile in minutes with secure verification',
      color: '#00F0FF',
    },
    {
      number: 2,
      title: 'Match',
      description: 'Our AI finds compatible recipients in real-time',
      color: '#FF3B80',
    },
    {
      number: 3,
      title: 'Coordinate',
      description: 'Medical teams coordinate the procedure securely',
      color: '#FFB347',
    },
    {
      number: 4,
      title: 'Impact',
      description: 'Watch how your donation changes lives forever',
      color: '#00F0FF',
    },
    {
      number: 5,
      title: 'Connect',
      description: 'Stay connected with your recipient\'s recovery journey',
      color: '#FF3B80',
    },
  ]

  return (
    <section id="impact" ref={containerRef} className="w-full bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-heading font-bold text-foreground mb-4">The Donation Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the complete process from registration to lasting impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-20" />

          <div className="space-y-12">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-1/2 px-6">
                  <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{stage.title}</h3>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-full border-4 border-background flex items-center justify-center font-bold text-primary-foreground z-10"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.number}
                  </motion.div>
                </div>

                {/* Empty space */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

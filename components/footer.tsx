'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const footerLinks = {
  Solutions: [
    { label: 'Donor Recognition Walls', href: '/donor-recognition-walls/' },
    { label: 'Alumni Engagement', href: '/alumni-engagement/' },
    { label: 'Interactive Displays', href: '/interactive-displays/' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog/' },
    { label: 'FAQ', href: '/faq/' },
  ],
}

export function Footer() {
  return (
    <footer className="footer-section w-full">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14"
        >
          {/* Brand column */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="relative w-9 h-9 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
                <Image
                  src="/apple-icon.png"
                  alt="TouchDonor logo"
                  width={150}
                  height={150}
                  className="max-w-none w-[420%] translate-y-[12%]"
                />
              </span>
              <span
                className="font-bold text-lg tracking-tight"
                style={{ color: 'var(--footer-foreground)' }}
              >
                TouchDonor
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--footer-muted)' }}>
              Connecting legacy through innovation — empowering institutions to honour
              every donor with lasting impact.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              viewport={{ once: true }}
            >
              <h4
                className="font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ color: 'var(--footer-foreground)' }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item, idx) => {
                  const label = typeof item === 'string' ? item : item.label
                  const href = typeof item === 'string' ? '#' : item.href
                  return (
                    <li key={idx}>
                      <a href={href} className="footer-link text-sm">
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid var(--footer-border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--footer-muted)' }}>
            © 2026 TouchDonor. All rights reserved.
          </p>
          <p
            className="text-sm italic font-medium"
            style={{ color: 'var(--footer-muted)' }}
          >
            &ldquo;Connecting legacy through innovation&rdquo;
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

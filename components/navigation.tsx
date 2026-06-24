'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  {
    label: 'Solutions',
    links: [
      { label: 'Donor Recognition Walls', href: '/donor-recognition-walls/' },
      { label: 'Alumni Engagement', href: '/alumni-engagement/' },
      { label: 'Interactive Displays', href: '/interactive-displays/' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'Blog', href: '#resources' },
      { label: 'FAQ', href: '/faq/' },
    ],
  },
]

const firstLink = { label: 'Home', href: '/' }
const lastLink = { label: 'Contact', href: '/contact/' }

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="relative w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
            <Image
              src="/apple-icon.png"
              alt="TouchDonor logo"
              width={134}
              height={134}
              className="max-w-none w-[420%] translate-y-[12%]"
              priority
            />
          </span>
          <span className="font-bold text-xl text-foreground">TouchDonor</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href={firstLink.href}
            className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            {firstLink.label}
          </Link>
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  openDropdown === item.label
                    ? 'text-foreground bg-muted/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="min-w-56 rounded-xl border border-border bg-popover shadow-lg shadow-black/5 p-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href={lastLink.href}
            className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            {lastLink.label}
          </Link>
        </div>

        {/* Desktop CTA */}
        {/* <div className="hidden lg:block">
          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition">
            Get Started
          </button>
        </div> */}

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              <Link
                href={firstLink.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-foreground"
              >
                {firstLink.label}
              </Link>
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href={lastLink.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-foreground border-t border-border"
              >
                {lastLink.label}
              </Link>
              <div className="pt-4">
                <button className="w-full px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

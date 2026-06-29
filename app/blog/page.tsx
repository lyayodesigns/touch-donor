'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

/* ─── Placeholder blog data (will be replaced by Sanity later) ────────── */
const categories = ['All', 'Donor Recognition', 'Alumni Engagement', 'Interactive Displays', 'Case Studies', 'Industry Insights']

const featuredPost = {
  slug: '#',
  title: 'How Digital Donor Walls Are Transforming University Fundraising',
  excerpt:
    'Discover how leading institutions are replacing static brass plaques with interactive digital donor recognition experiences that drive engagement and inspire continued giving.',
  category: 'Donor Recognition',
  date: 'June 25, 2026',
  readTime: '8 min read',
  gradient: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 50%, #F472B6 100%)',
}

const posts = [
  {
    slug: '#',
    title: '5 Ways Interactive Displays Boost Alumni Engagement',
    excerpt:
      'Alumni halls of fame are evolving. Learn how touchscreen kiosks and digital signage keep graduates connected to their alma mater.',
    category: 'Alumni Engagement',
    date: 'June 20, 2026',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #FB7185 100%)',
    glow: 'rgba(244,114,182,0.5)',
  },
  {
    slug: '#',
    title: 'The ROI of Digital Recognition: A Case Study',
    excerpt:
      'A mid-sized university saw a 34% increase in repeat giving after deploying TouchDonor. Here\'s exactly how they did it.',
    category: 'Case Studies',
    date: 'June 15, 2026',
    readTime: '10 min read',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    glow: 'rgba(251,191,36,0.5)',
  },
  {
    slug: '#',
    title: 'Accessibility in Donor Recognition: WCAG 2.1 Best Practices',
    excerpt:
      'Inclusive design isn\'t optional. Learn how to ensure your digital donor wall meets accessibility standards and serves every visitor.',
    category: 'Industry Insights',
    date: 'June 10, 2026',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    glow: 'rgba(52,211,153,0.5)',
  },
  {
    slug: '#',
    title: 'From Brass to Digital: A Migration Guide for Advancement Teams',
    excerpt:
      'Thinking about transitioning from traditional plaques to interactive displays? This step-by-step guide covers data migration, design, and stakeholder buy-in.',
    category: 'Donor Recognition',
    date: 'June 5, 2026',
    readTime: '9 min read',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    glow: 'rgba(139,92,246,0.5)',
  },
  {
    slug: '#',
    title: 'Interactive Displays in Athletic Departments: What Works',
    excerpt:
      'Athletic halls of fame demand excitement and energy. See how top programs use interactive kiosks to celebrate their sporting legacy.',
    category: 'Interactive Displays',
    date: 'May 30, 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    glow: 'rgba(96,165,250,0.5)',
  },
  {
    slug: '#',
    title: 'Cloud CMS vs On‑Premise: Which Is Right for Your Institution?',
    excerpt:
      'We break down the pros and cons of cloud-based content management versus on-premise solutions for digital recognition platforms.',
    category: 'Industry Insights',
    date: 'May 25, 2026',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #DDD6FE 100%)',
    glow: 'rgba(167,139,250,0.5)',
  },
]

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function BlogHero() {
  return (
    <section
      className="w-full pt-32 pb-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0F0A2A 0%, #1A0F3A 50%, #120830 100%)',
      }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.25) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.20)',
              border: '1px solid rgba(196,181,253,0.45)',
              color: '#b9b6c9',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse inline-block" />
            Blog &amp; Insights
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Insights &amp;{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #9489ad 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Resources
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ color: '#E9D5FF' }}>
            Expert articles, case studies, and actionable strategies on digital donor recognition,
            alumni engagement, and interactive display technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Category Filter ──────────────────────────────────────────────────── */
function CategoryFilter({
  active,
  onChange,
}: {
  active: string
  onChange: (cat: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-2 mb-16"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          style={{
            background:
              active === cat
                ? 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)'
                : 'rgba(139,92,246,0.08)',
            color: active === cat ? '#FFFFFF' : '#6D28D9',
            border: `1px solid ${active === cat ? 'transparent' : 'rgba(139,92,246,0.2)'}`,
            boxShadow: active === cat ? '0 4px 20px rgba(139,92,246,0.35)' : 'none',
          }}
        >
          {cat}
        </button>
      ))}
    </motion.div>
  )
}

/* ─── Featured Post Card ───────────────────────────────────────────────── */
function FeaturedPostCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <Link href={featuredPost.slug} className="block group">
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(139,92,246,0.15)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 40px rgba(139,92,246,0.1)',
          }}
        >
          {/* Top gradient bar */}
          <div
            className="h-[4px]"
            style={{ background: featuredPost.gradient }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — gradient visual */}
            <div
              className="relative h-56 lg:h-auto min-h-[280px]"
              style={{
                background: featuredPost.gradient,
              }}
            >
              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl md:text-7xl font-heading font-black text-white/30">✦</span>
                  <p className="text-white/70 text-sm font-semibold mt-2 tracking-wider uppercase">Featured Article</p>
                </div>
              </div>
            </div>

            {/* Right — content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(139,92,246,0.1)',
                    color: '#8B5CF6',
                    border: '1px solid rgba(139,92,246,0.25)',
                  }}
                >
                  {featuredPost.category}
                </span>
                <span className="text-xs" style={{ color: '#6D28D9' }}>
                  {featuredPost.date}
                </span>
                <span className="text-xs" style={{ color: '#A78BFA' }}>
                  · {featuredPost.readTime}
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-snug group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{
                  color: '#1E1B4B',
                  backgroundImage: 'linear-gradient(135deg, #8B5CF6, #F472B6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'inherit',
                }}
              >
                {featuredPost.title}
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{ color: '#4C1D95' }}>
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group-hover:scale-[1.03]"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)',
                    boxShadow: '0 4px 20px rgba(139,92,246,0.35)',
                  }}
                >
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Blog Post Card ───────────────────────────────────────────────────── */
function BlogPostCard({
  post,
  index,
}: {
  post: (typeof posts)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={post.slug} className="block h-full">
        <div
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(139,92,246,0.12)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 20px rgba(139,92,246,0.06)',
          }}
        >
          {/* Top gradient bar */}
          <div
            className="h-[3px] transition-opacity duration-300"
            style={{ background: post.gradient, opacity: 0.6 }}
          />

          {/* Thumbnail placeholder */}
          <div
            className="h-44 relative overflow-hidden"
            style={{ background: post.gradient }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl text-white/25 font-heading font-black">✦</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                style={{
                  background: `${post.glow?.replace('0.5', '0.1') ?? 'rgba(139,92,246,0.1)'}`,
                  color: post.glow?.replace('rgba', 'rgb').replace(',0.5)', ')') ?? '#8B5CF6',
                  border: `1px solid ${post.glow?.replace('0.5', '0.25') ?? 'rgba(139,92,246,0.25)'}`,
                }}
              >
                {post.category}
              </span>
            </div>

            <h3
              className="text-lg font-heading font-bold mb-2 leading-snug transition-colors duration-300 group-hover:text-[#8B5CF6]"
              style={{ color: '#1E1B4B' }}
            >
              {post.title}
            </h3>

            <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#4C1D95' }}>
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: '#6D28D9' }}>
                {post.date}
              </span>
              <span className="text-xs" style={{ color: '#A78BFA' }}>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Blog Grid Section ────────────────────────────────────────────────── */
function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  return (
    <section
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F3FF 60%, #EDE9FE 100%)' }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#1E1B4B' }}
          >
            Latest{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 40%, #F472B6 100%)' }}
            >
              Articles
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6D28D9' }}>
            Stay ahead with the latest in donor recognition technology, institutional storytelling, and engagement strategy.
          </p>
        </motion.div>

        {/* Category filter */}
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        {/* Featured post */}
        {activeCategory === 'All' && <FeaturedPostCard />}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <BlogPostCard key={post.title} post={post} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg" style={{ color: '#6D28D9' }}>
              No articles in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

/* ─── Newsletter CTA Section ───────────────────────────────────────────── */
function NewsletterCTA() {
  return (
    <section
      className="w-full py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F0A2A 0%, #1A0F3A 50%, #120830 100%)' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F472B6 0%, transparent 70%)' }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(196,181,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(139,92,246,0.18)',
              border: '1px solid rgba(196,181,253,0.35)',
              color: '#C4B5FD',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse inline-block" />
            Stay Updated
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-white">
            Never Miss an{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #F9A8D4 100%)' }}
            >
              Insight
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: 'rgba(196,181,253,0.75)' }}>
            Subscribe to receive the latest articles on donor recognition best practices,
            alumni engagement strategies, and digital display innovation — delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#8B5CF6]"
              style={{
                background: 'rgba(139,92,246,0.12)',
                border: '1px solid rgba(196,181,253,0.3)',
                color: '#E9D5FF',
              }}
            />
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full font-semibold text-white text-sm"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 60%, #F472B6 100%)',
                boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
              }}
            >
              Subscribe
            </motion.button>
          </div>

          <p className="text-xs mt-4" style={{ color: 'rgba(196,181,253,0.5)' }}>
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <BlogHero />
      <BlogGrid />
      <NewsletterCTA />
      <Footer />
    </main>
  )
}

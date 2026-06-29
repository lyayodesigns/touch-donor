import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Insights & Resources | TouchDonor',
  description:
    'Explore expert articles, case studies, and industry insights on digital donor recognition, alumni engagement, and interactive display technology.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Blog — Insights & Resources | TouchDonor',
    description:
      'Expert articles, case studies, and industry insights on digital donor recognition, alumni engagement, and interactive display technology.',
    url: '/blog/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Insights & Resources | TouchDonor',
    description:
      'Expert articles, case studies, and industry insights on digital donor recognition, alumni engagement, and interactive display technology.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TouchDonor',
  description:
    'Everything you need to know about TouchDonor\'s digital recognition platform, from compatibility and content management to accessibility.',
  alternates: { canonical: '/faq/' },
  openGraph: {
    title: 'Frequently Asked Questions | TouchDonor',
    description:
      'Answers about TouchDonor\'s digital recognition platform, from compatibility and content management to accessibility.',
    url: '/faq/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | TouchDonor',
    description:
      'Answers about TouchDonor\'s digital recognition platform, from compatibility and content management to accessibility.',
  },
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

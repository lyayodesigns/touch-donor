import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Demo | TouchDonor',
  description:
    'Request a personalized demo or reach out to the TouchDonor team. We\'ll help you transform donor recognition into an interactive, lasting experience.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact Us & Request a Demo | TouchDonor',
    description:
      'Request a personalized demo or reach out to the TouchDonor team to transform donor recognition into an interactive experience.',
    url: '/contact/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Request a Demo | TouchDonor',
    description:
      'Request a personalized demo or reach out to the TouchDonor team to transform donor recognition into an interactive experience.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

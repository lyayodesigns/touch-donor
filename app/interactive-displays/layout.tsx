import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Touchscreen Display Software | TouchDonor',
  description:
    'Transform visitor engagement with TouchDonor\'s interactive display software. Touchscreen kiosks, digital signage, and recognition displays for schools and nonprofits.',
  alternates: { canonical: '/interactive-displays/' },
  openGraph: {
    title: 'Interactive Touchscreen Display Software | TouchDonor',
    description:
      'Touchscreen kiosks, digital signage, and recognition displays that transform visitor engagement for schools and nonprofits.',
    url: '/interactive-displays/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Touchscreen Display Software | TouchDonor',
    description:
      'Touchscreen kiosks, digital signage, and recognition displays that transform visitor engagement for schools and nonprofits.',
  },
}

export default function InteractiveDisplaysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

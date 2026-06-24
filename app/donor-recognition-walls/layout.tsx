import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Donor Recognition Walls Software | TouchDonor',
  description:
    'Transform donor appreciation with TouchDonor\'s interactive donor wall software. Digital donor recognition that tells impact stories, updates in real time, and never runs out of space.',
  alternates: { canonical: '/donor-recognition-walls/' },
  openGraph: {
    title: 'Digital Donor Recognition Walls Software | TouchDonor',
    description:
      'Interactive digital donor recognition walls that tell impact stories, update in real time, and grow with your institution.',
    url: '/donor-recognition-walls/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Donor Recognition Walls Software | TouchDonor',
    description:
      'Interactive digital donor recognition walls that tell impact stories, update in real time, and grow with your institution.',
  },
}

export default function DonorRecognitionWallsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

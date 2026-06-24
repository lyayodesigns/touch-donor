import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Alumni Engagement Platform | TouchDonor',
  description:
    'Reconnect graduates and drive alumni giving with TouchDonor\'s digital alumni engagement platform. Interactive recognition, storytelling, and community building for schools.',
  alternates: { canonical: '/alumni-engagement/' },
  openGraph: {
    title: 'Digital Alumni Engagement Platform | TouchDonor',
    description:
      'Reconnect graduates and drive alumni giving with interactive recognition, storytelling, and community building for schools.',
    url: '/alumni-engagement/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Alumni Engagement Platform | TouchDonor',
    description:
      'Reconnect graduates and drive alumni giving with interactive recognition, storytelling, and community building for schools.',
  },
}

export default function AlumniEngagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

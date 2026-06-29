import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://touchdonor.com'),
  title: 'Digital Donor Recognition & Interactive Display Software | TouchDonor',
  description: 'Transform school legacy management with TouchDonor\'s interactive display software. Digital hall of fame, donor walls, alumni engagement & archival solutions. Emmy‑nominated technology for education.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '48x48',
      },
      {
        url: '/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Digital Donor Recognition & Interactive Display Software | TouchDonor',
    description: 'Digital hall of fame, donor walls, alumni engagement & archival solutions. Emmy‑nominated interactive display technology for education.',
    url: '/',
    siteName: 'TouchDonor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Donor Recognition & Interactive Display Software | TouchDonor',
    description: 'Digital hall of fame, donor walls, alumni engagement & archival solutions. Emmy‑nominated interactive display technology for education.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0E17' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

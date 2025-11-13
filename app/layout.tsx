import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import GoogleAccountPopup from '@/components/GoogleAccountPopup'
import SaveRecentAccount from '@/components/SaveRecentAccount'

// Instrument Serif - Elegant, natural serif font
const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DMR Media - Luxury Real Estate Marketing Agency',
  description: 'Specialized Google marketing, SEO, and Google Ads for luxury real estate professionals. Elevate your brand and dominate the premium property market.',
  keywords: 'real estate marketing, luxury real estate, Google Ads, SEO, real estate SEO, Google marketing, premium property marketing, DMR Media',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  metadataBase: new URL('https://dmrmedia.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body className={instrumentSerif.className}>
        <ScrollProgressBar />
        <ScrollAnimations />
        <SaveRecentAccount />
        <GoogleAccountPopup />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

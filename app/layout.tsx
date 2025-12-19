import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'

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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17780739958"
          strategy="afterInteractive"
        />
        <Script
          id="google-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17780739958');
            `,
          }}
        />
        {/* End Google tag */}
        
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1985215999036951');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1985215999036951&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <ScrollProgressBar />
        <ScrollAnimations />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Elfsight AI Chatbot | DMR Media Bot */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-90e5dbc1-4850-470a-b384-914842649785" data-elfsight-app-lazy></div>
      </body>
    </html>
  )
}

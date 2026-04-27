import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import { ELFSIGHT_REVIEWS_APP_CLASS } from '@/lib/elfsight-widgets'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import UTMTracker from '@/components/UTMTracker'

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
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
  metadataBase: new URL('https://www.dmrmedia.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16882640022"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16882640022');
            `,
          }}
        />
      </head>
      <body className={`${instrumentSerif.className} ${inter.variable}`}>
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
        <UTMTracker />
        <ScrollProgressBar />
        {/* Global Organization + WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'DMR Media',
                url: 'https://www.dmrmedia.org',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.dmrmedia.org/images/logo.png',
                },
                sameAs: [
                  'https://www.linkedin.com/company/dmr-media',
                  'https://www.instagram.com/dmrmedia',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'team@dmrmedia.org',
                  contactType: 'customer support',
                  areaServed: 'US',
                  availableLanguage: 'English',
                },
                description:
                  'Specialized Google marketing, SEO, and Google Ads for luxury real estate professionals.',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'DMR Media',
                url: 'https://www.dmrmedia.org',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://www.dmrmedia.org/blog?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        {/* Elfsight All-in-One Reviews | DMR Widget (global) */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        <div className={ELFSIGHT_REVIEWS_APP_CLASS} data-elfsight-app-lazy />
      </body>
    </html>
  )
}

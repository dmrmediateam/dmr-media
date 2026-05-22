import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import './styles/site-nav-luxury.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import { ELFSIGHT_REVIEWS_APP_CLASS } from '@/lib/elfsight-widgets'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
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
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TDX95FLH');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "woggk4cal6");
            `,
          }}
        />
        {/* OpenAI Ads pixel */}
        <Script
          id="openai-ads-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(w, d, s, u) {
                if (w.oaiq) return;
                var q = function() {
                  q.q.push(arguments);
                };
                q.q = [];
                w.oaiq = q;
                var j = d.createElement(s);
                j.async = 1;
                j.src = u;
                var f = d.getElementsByTagName(s)[0];
                f.parentNode.insertBefore(j, f);
              }(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

              oaiq("init", {
                pixelId: "YMJrvTgnD8Dwizwi78V9VJ",
                debug: true
              });

              oaiq("measure", "registration_completed", {
                type: "customer_action",
                amount: 0,
                currency: "USD"
              });
            `,
          }}
        />
      </head>
      <body className={`${instrumentSerif.className} ${inter.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDX95FLH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        {/* Global Organization + WebSite structured data (same source as EEAT / property-marketing graphs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              { '@context': 'https://schema.org', ...buildOrganizationSchema('https://www.dmrmedia.org') },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'DMR Media',
                url: 'https://www.dmrmedia.org',
                publisher: { '@id': 'https://www.dmrmedia.org/#organization' },
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

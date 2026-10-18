import ThankYouBookingPage from '@/components/landing/ThankYouBookingPage'
import GoogleAdsLandingPageConversion from '@/components/landing/GoogleAdsLandingPageConversion'

/** Qualified applicants land here from every /landing form, so the page-load conversion lives here only. */
export default function ThankYouQPage() {
  return (
    <>
      <GoogleAdsLandingPageConversion />
      <ThankYouBookingPage />
    </>
  )
}

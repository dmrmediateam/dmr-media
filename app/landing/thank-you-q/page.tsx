import ThankYouBookingPage from '@/components/landing/ThankYouBookingPage'

/**
 * Qualified applicants land here from every /landing form. The Google Ads
 * "Submit lead form (1)" conversion fires on submit (LandingApplicationForm),
 * so this page fires no conversion of its own, or every lead would count twice.
 */
export default function ThankYouQPage() {
  return <ThankYouBookingPage />
}

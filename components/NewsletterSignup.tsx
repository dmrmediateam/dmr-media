import GrowthPartnerPromoCard from '@/components/GrowthPartnerPromoCard'

/** In-article blog CTA (the `newsletterSignup` block): the site-wide growth / calendar promo card. */
export default function NewsletterSignup() {
  return (
    <section className="my-10 md:my-14 px-4 sm:px-6" aria-labelledby="blog-growth-promo-heading">
      <div className="mx-auto flex w-full max-w-[480px] flex-col items-center">
        <GrowthPartnerPromoCard headingId="blog-growth-promo-heading" className="w-full" />
      </div>
    </section>
  )
}

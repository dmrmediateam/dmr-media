import ServicesShowcase from '@/components/ServicesShowcase'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata = metadataFromRegistry('/services')

export default function ServicesPage() {
  return (
    <SEOWrapper slug="/services">
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServicesShowcase
        heading="Systems designed for market makers."
        description="Each engagement is built around clarity, restraint, and measurable outcomes. Explore the programs we operate for luxury real estate teams and developers."
        sectionClassName="bg-[var(--surface-base)]"
      />
    </div>
    </SEOWrapper>
  )
}


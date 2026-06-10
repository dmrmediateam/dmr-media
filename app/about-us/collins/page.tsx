import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamMember } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'
const member = getTeamMember('collins')!

export const metadata: Metadata = {
  title: 'Collins — Google Ads Specialist | DMR Media',
  description:
    'Collins is a Google Ads specialist at DMR Media, running data-driven paid media campaigns that turn real estate search intent into qualified leads.',
  alternates: {
    canonical: `${BASE_URL}/about-us/collins`,
  },
  openGraph: {
    title: 'Collins — Google Ads Specialist | DMR Media',
    description:
      'Collins manages Google Ads campaigns for luxury real estate teams — data-driven, conversion-focused, built to outperform in competitive markets.',
    type: 'profile',
    images: [`${BASE_URL}${member.image}`],
  },
}

export default function CollinsPage() {
  if (!member) notFound()

  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const personSchema = {
    '@type': 'Person',
    '@id': `${BASE_URL}/about-us/collins#person`,
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${BASE_URL}/about-us/collins`,
    image: `${BASE_URL}${member.image}`,
    knowsAbout: member.expertise,
    worksFor: {
      '@id': `${BASE_URL}/#organization`,
    },
  }

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, personSchema],
  }

  return <TeamProfileContent member={member} schemaGraph={schemaGraph} />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamMember } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'
const member = getTeamMember('max-de')!

export const metadata: Metadata = {
  title: 'Max De — CMO | DMR Media',
  description:
    'Max De is the Chief Marketing Officer at DMR Media. Campaign strategy, content architecture, and full-funnel marketing for luxury real estate.',
  alternates: {
    canonical: `${BASE_URL}/about-us/max-de`,
  },
  openGraph: {
    title: 'Max De — CMO | DMR Media',
    description:
      'Max De is the CMO at DMR Media — obsessed with client growth and campaign performance for luxury real estate teams.',
    type: 'profile',
    images: [`${BASE_URL}${member.image}`],
  },
}

export default function MaxDePage() {
  if (!member) notFound()

  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const personSchema = {
    '@type': 'Person',
    '@id': `${BASE_URL}/about-us/max-de#person`,
    name: member.name,
    givenName: 'Max',
    familyName: 'Deleonardis',
    jobTitle: member.title,
    description: member.shortBio,
    url: `${BASE_URL}/about-us/max-de`,
    image: `${BASE_URL}${member.image}`,
    sameAs: [
      'https://www.linkedin.com/in/maxdeleonardis',
    ],
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

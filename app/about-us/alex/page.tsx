import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamMember } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'
const member = getTeamMember('alex')!

export const metadata: Metadata = {
  title: 'Alex — Sales | DMR Media',
  description:
    'Alex is on the DMR Media sales team, connecting high-producing real estate agents and teams with the marketing systems that help them grow.',
  alternates: {
    canonical: `${BASE_URL}/about-us/alex`,
  },
  openGraph: {
    title: 'Alex — Sales | DMR Media',
    description:
      'Alex connects the right agents and teams with the DMR system — fit-first, market-researched, direct.',
    type: 'profile',
    images: [`${BASE_URL}${member.image}`],
  },
}

export default function AlexPage() {
  if (!member) notFound()

  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const personSchema = {
    '@type': 'Person',
    '@id': `${BASE_URL}/about-us/alex#person`,
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${BASE_URL}/about-us/alex`,
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

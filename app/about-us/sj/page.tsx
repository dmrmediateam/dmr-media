import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamMember } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'
const member = getTeamMember('sj')!

export const metadata: Metadata = {
  title: 'SJ — Admin & Operations | DMR Media',
  description:
    'SJ is the Admin & Operations lead at DMR Media, keeping the workflow running smoothly and making sure every client and team member has what they need.',
  alternates: {
    canonical: `${BASE_URL}/about-us/sj`,
  },
  openGraph: {
    title: 'SJ — Admin & Operations | DMR Media',
    description:
      'SJ keeps the DMR Media engine running — workflow coordination, operations management, and making sure nothing falls through the cracks.',
    type: 'profile',
    images: [`${BASE_URL}${member.image}`],
  },
}

export default function SJPage() {
  if (!member) notFound()

  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const personSchema = {
    '@type': 'Person',
    '@id': `${BASE_URL}/about-us/sj#person`,
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${BASE_URL}/about-us/sj`,
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

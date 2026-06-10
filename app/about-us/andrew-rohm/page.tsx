import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamMember } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'
const member = getTeamMember('andrew-rohm')!

export const metadata: Metadata = {
  title: 'Andrew Rohm — CEO | DMR Media',
  description:
    'Andrew Rohm is the founder and CEO of DMR Media. Google Ads and SEO strategist for luxury real estate teams across the United States.',
  alternates: {
    canonical: `${BASE_URL}/about-us/andrew-rohm`,
  },
  openGraph: {
    title: 'Andrew Rohm — CEO | DMR Media',
    description:
      'Andrew Rohm is the founder and CEO of DMR Media. Google Ads and SEO strategist for luxury real estate teams.',
    type: 'profile',
    images: [`${BASE_URL}${member.image}`],
  },
}

export default function AndrewRohmPage() {
  if (!member) notFound()

  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const personSchema = {
    '@type': 'Person',
    '@id': `${BASE_URL}/about-us/andrew-rohm#person`,
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${BASE_URL}/about-us/andrew-rohm`,
    image: `${BASE_URL}${member.image}`,
    sameAs: [
      'https://www.linkedin.com/in/andrewrohm',
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

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeamMember } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'
const member = getTeamMember('nako-a')!

export const metadata: Metadata = {
  title: 'Nako A. — Web Developer | DMR Media',
  description:
    'Nako A. is a web developer and technical SEO specialist at DMR Media, building high-performing websites and digital marketing systems for real estate teams.',
  alternates: {
    canonical: `${BASE_URL}/about-us/nako-a`,
  },
  openGraph: {
    title: 'Nako A. — Web Developer | DMR Media',
    description:
      'Nako A. builds high-performing websites and digital marketing systems for DMR Media clients — technical SEO, analytics, and conversion optimization.',
    type: 'profile',
    images: [`${BASE_URL}${member.image}`],
  },
}

export default function NakoAPage() {
  if (!member) notFound()

  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const personSchema = {
    '@type': 'Person',
    '@id': `${BASE_URL}/about-us/nako-a#person`,
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${BASE_URL}/about-us/nako-a`,
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

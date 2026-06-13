import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  groups: [
    { name: 'profile', title: 'Team profile', default: true },
    { name: 'social', title: 'Social & links' },
    { name: 'settings', title: 'Display settings' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'profile',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'profile',
      description: 'Used for /about/{slug} profile URL and blog author links.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile image',
      type: 'image',
      group: 'profile',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Job title',
      type: 'string',
      group: 'profile',
      description: 'Full title for schema and profile page (e.g. "Chief Executive Officer, DMR Media").',
    }),
    defineField({
      name: 'role',
      title: 'Role label',
      type: 'string',
      group: 'profile',
      description: 'Short label shown on team cards (e.g. "CEO", "CMO").',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      rows: 3,
      group: 'profile',
      description: '1–2 sentences for team cards and meta descriptions.',
    }),
    defineField({
      name: 'longDescription',
      title: 'Long description',
      type: 'text',
      rows: 12,
      group: 'profile',
      description: 'Full bio for the profile page. Separate paragraphs with a blank line.',
    }),
    defineField({
      name: 'skills',
      title: 'Skills & fluencies',
      type: 'array',
      group: 'profile',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'bio',
      title: 'Blog bio (legacy)',
      type: 'text',
      rows: 4,
      group: 'profile',
      description: 'Optional fallback for blog bylines if short description is empty.',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
      description: 'Full LinkedIn profile URL (e.g., https://www.linkedin.com/in/username)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
      group: 'social',
      description: 'Full Twitter/X profile URL (e.g., https://twitter.com/username)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'featuredOnAbout',
      title: 'Show on About page',
      type: 'boolean',
      group: 'settings',
      description: 'Display this author in the Meet the team section on /about.',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      group: 'settings',
      description: 'Lower numbers appear first on the About page team grid.',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      role: 'role',
      slug: 'slug.current',
      featured: 'featuredOnAbout',
    },
    prepare(selection) {
      const { title, media, role, slug, featured } = selection
      const parts = [role, slug ? `/about/${slug}` : 'No slug'].filter(Boolean)
      if (featured === false) parts.push('Hidden from About')
      return {
        title,
        media,
        subtitle: parts.join(' · '),
      }
    },
  },
})

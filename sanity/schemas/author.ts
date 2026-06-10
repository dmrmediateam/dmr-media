import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'teamProfileSlug',
      title: 'Team Profile Link',
      type: 'string',
      description: 'Link to /about-us/[slug] team profile page (e.g., "andrew-rohm", "max-de"). Leave empty if author has no team profile.',
      placeholder: 'e.g., andrew-rohm',
      validation: (Rule) => 
        Rule.custom((value: string | undefined) => {
          if (!value) return true // Optional field
          // Validate slug format: lowercase, hyphens only
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
            return 'Must be lowercase letters, numbers, and hyphens only (e.g., "max-de")'
          }
          return true
        }),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
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
      description: 'Full Twitter/X profile URL (e.g., https://twitter.com/username)',
      validation: (Rule) => 
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      teamSlug: 'teamProfileSlug',
    },
    prepare(selection) {
      const { title, media, teamSlug } = selection
      return {
        title,
        media,
        subtitle: teamSlug ? `Team profile: /about-us/${teamSlug}` : 'No team profile linked',
      }
    },
  },
})

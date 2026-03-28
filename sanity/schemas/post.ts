import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SEO Strategy', value: 'SEO Strategy' },
          { title: 'Google Ads', value: 'Google Ads' },
          { title: 'Marketing Insights', value: 'Marketing Insights' },
          { title: 'Real Estate Marketing', value: 'Real Estate Marketing' },
          { title: 'Content Strategy', value: 'Content Strategy' },
          { title: 'Digital Marketing', value: 'Digital Marketing' },
          { title: 'Case Studies', value: 'Case Studies' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., "5 min read"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'schemaMarkup',
      title: 'Schema Markup (Optional)',
      type: 'object',
      description: 'Optional fields for custom schema markup. If left empty, default Article schema will be generated automatically.',
      fields: [
        {
          name: 'dateModified',
          title: 'Date Modified',
          type: 'datetime',
          description: 'Last modification date. If not set, publishedAt will be used.',
        },
        {
          name: 'articleSection',
          title: 'Article Section',
          type: 'string',
          description: 'The section of the article (e.g., "SEO Strategy", "Marketing Insights"). Defaults to category if not set.',
        },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'array',
      description:
        'Add frequently asked questions for this post. These appear as a styled FAQ section below the article body and generate FAQPage structured data (schema.org) for Google rich results.',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              description: 'Plain text answer. Keep it concise — Google truncates long answers in rich results.',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'question', subtitle: 'answer' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})

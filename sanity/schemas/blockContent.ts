import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineArrayMember({
      title: 'Markdown',
      name: 'markdown',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Paste markdown here',
          type: 'text',
          description: 'Paste raw markdown from AI — tables, bold, lists, etc. The first row of a markdown table becomes the header.',
          rows: 10,
        },
      ],
      preview: {
        select: { content: 'content' },
        prepare({ content }: { content?: string }) {
          return { title: content ? content.slice(0, 60) + '…' : 'Empty markdown block' }
        },
      },
    }),
    defineArrayMember({
      title: 'Table',
      name: 'table',
      type: 'object',
      fields: [
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            {
              title: 'Row',
              name: 'row',
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
              preview: {
                select: { cells: 'cells' },
                prepare({ cells }: { cells?: string[] }) {
                  return { title: (cells ?? []).join(' | ') || 'Empty row' }
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: { rows: 'rows' },
        prepare({ rows }: { rows?: { cells?: string[] }[] }) {
          const count = rows?.length ?? 0
          return { title: `Table — ${count} row${count === 1 ? '' : 's'}` }
        },
      },
    }),
  ],
})

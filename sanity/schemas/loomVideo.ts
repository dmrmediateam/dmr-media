export default {
  name: 'loomVideo',
  title: 'Loom Video',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: (Rule: any) => Rule.required(),
      description: 'The client this video is for',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Title of the video report',
    },
    {
      name: 'loomUrl',
      title: 'Loom Video URL',
      type: 'url',
      validation: (Rule: any) => Rule.required().uri({
        scheme: ['https'],
        allowRelative: false,
      }),
      description: 'Full Loom video URL (e.g., https://www.loom.com/share/...)',
    },
    {
      name: 'loomEmbedId',
      title: 'Loom Embed ID',
      type: 'string',
      description: 'Extracted from Loom URL (e.g., from https://www.loom.com/share/abc123, the ID is abc123)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what this video covers',
    },
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'text',
      description: 'Optional transcript from the Loom video for AI analysis',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
      description: 'Date of the video report',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether this video should be displayed',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      clientName: 'client.name',
      date: 'date',
    },
    prepare({ title, clientName, date }: any) {
      return {
        title: title || 'Untitled Video',
        subtitle: `${clientName || 'Unknown Client'} - ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}

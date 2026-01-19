export default {
  name: 'backlink',
  title: 'Backlink/Citation',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Backlink URL',
      type: 'url',
      description: 'URL of the backlink/citation',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'domain',
      title: 'Domain',
      type: 'string',
      description: 'Domain name (e.g., example.com)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'anchorText',
      title: 'Anchor Text',
      type: 'string',
      description: 'Link anchor text',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Backlink', value: 'backlink' },
          { title: 'Citation', value: 'citation' },
          { title: 'Directory', value: 'directory' },
          { title: 'Press Release', value: 'press-release' },
          { title: 'Guest Post', value: 'guest-post' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'backlink',
    },
    {
      name: 'dateAcquired',
      title: 'Date Acquired',
      type: 'date',
      description: 'When this backlink was acquired',
    },
    {
      name: 'dr',
      title: 'Domain Rating (DR)',
      type: 'number',
      description: 'Domain rating of the linking site',
    },
    {
      name: 'da',
      title: 'Domain Authority (DA)',
      type: 'number',
      description: 'Domain authority of the linking site',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Lost', value: 'lost' },
          { title: 'Pending', value: 'pending' },
        ],
      },
      initialValue: 'active',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
      description: 'Additional notes about this backlink',
    },
  ],
  preview: {
    select: {
      clientName: 'client.name',
      domain: 'domain',
      type: 'type',
      status: 'status',
    },
    prepare({ clientName, domain, type, status }: any) {
      return {
        title: domain || 'Unknown Domain',
        subtitle: `${clientName || 'Unknown'} - ${type || 'backlink'} (${status || 'active'})`,
      }
    },
  },
  orderings: [
    {
      title: 'Date Acquired (Newest)',
      name: 'dateDesc',
      by: [{ field: 'dateAcquired', direction: 'desc' }],
    },
    {
      title: 'Domain Rating (Highest)',
      name: 'drDesc',
      by: [{ field: 'dr', direction: 'desc' }],
    },
  ],
}

export default {
  name: 'clientServices',
  title: 'Client Services',
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
      name: 'googleAds',
      title: 'Google Ads',
      type: 'boolean',
      description: 'Client has Google Ads management',
      initialValue: false,
    },
    {
      name: 'seoAio',
      title: 'SEO/AIO',
      type: 'boolean',
      description: 'Client has SEO/AIO services',
      initialValue: false,
    },
    {
      name: 'isa',
      title: 'ISA (Inside Sales Agent)',
      type: 'boolean',
      description: 'Client has ISA services',
      initialValue: false,
    },
    {
      name: 'salesConsulting',
      title: 'Sales Consulting',
      type: 'boolean',
      description: 'Client has sales consulting',
      initialValue: false,
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When services started',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
      description: 'Additional service notes',
    },
  ],
  preview: {
    select: {
      clientName: 'client.name',
      googleAds: 'googleAds',
      seoAio: 'seoAio',
      isa: 'isa',
      salesConsulting: 'salesConsulting',
    },
    prepare({ clientName, googleAds, seoAio, isa, salesConsulting }: any) {
      const services = []
      if (googleAds) services.push('Google Ads')
      if (seoAio) services.push('SEO/AIO')
      if (isa) services.push('ISA')
      if (salesConsulting) services.push('Sales Consulting')
      
      return {
        title: clientName || 'Unknown Client',
        subtitle: services.length > 0 ? services.join(', ') : 'No services',
      }
    },
  },
}

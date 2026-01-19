export default {
  name: 'clientMetrics',
  title: 'Client Metrics',
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
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Reporting period date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paidLeads',
      title: 'Paid Leads',
      type: 'number',
      description: 'Number of leads from paid advertising',
      initialValue: 0,
    },
    {
      name: 'organicLeads',
      title: 'Organic Leads',
      type: 'number',
      description: 'Number of leads from organic search',
      initialValue: 0,
    },
    {
      name: 'totalLeads',
      title: 'Total Leads',
      type: 'number',
      description: 'Total leads (manually entered)',
      initialValue: 0,
    },
    {
      name: 'backlinks',
      title: 'Backlinks',
      type: 'number',
      description: 'Total number of backlinks',
      initialValue: 0,
    },
    {
      name: 'drDa',
      title: 'DR/DA',
      type: 'string',
      description: 'Domain Rating / Domain Authority',
    },
    {
      name: 'websiteTraffic',
      title: 'Website Traffic',
      type: 'number',
      description: 'Total website visitors',
      initialValue: 0,
    },
    {
      name: 'semrushTraffic',
      title: 'SEMrush Traffic',
      type: 'number',
      description: 'Traffic data from SEMrush',
      initialValue: 0,
    },
    {
      name: 'adSpend',
      title: 'Ad Spend',
      type: 'number',
      description: 'Total advertising spend',
      initialValue: 0,
    },
    {
      name: 'avgHomePrice',
      title: 'Average Home Price',
      type: 'number',
      description: 'Average home price in market',
      initialValue: 0,
    },
    {
      name: 'gbpRankTracking',
      title: 'GBP Rank Tracking',
      type: 'string',
      description: 'Google Business Profile ranking data',
    },
    // Hidden fields (admin only)
    {
      name: 'commission',
      title: 'Commission',
      type: 'number',
      description: 'Commission rate (hidden from client)',
      hidden: true,
      initialValue: 0,
    },
    {
      name: 'packagePrice',
      title: 'Package Price',
      type: 'number',
      description: 'Monthly package price (hidden from client)',
      hidden: true,
      initialValue: 0,
    },
    {
      name: 'avgCloseRate',
      title: 'Average Close Rate',
      type: 'number',
      description: 'Average close rate percentage (hidden from client)',
      hidden: true,
      initialValue: 0,
    },
    // Calculated fields (manually entered)
    {
      name: 'estCloses',
      title: 'Estimated Closes',
      type: 'number',
      description: 'Estimated closes (manually entered)',
      initialValue: 0,
    },
    {
      name: 'estROI',
      title: 'Estimated ROI',
      type: 'number',
      description: 'Estimated ROI percentage (manually entered)',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      clientName: 'client.name',
      date: 'date',
      leads: 'totalLeads',
    },
    prepare({ clientName, date, leads }: any) {
      return {
        title: clientName || 'Unknown Client',
        subtitle: `${date || 'No date'} - ${leads || 0} leads`,
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
  ],
}

export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'passwordHash',
      title: 'Password Hash',
      type: 'string',
      hidden: true,
      readOnly: true
    },
    {
      name: 'studioUrl',
      title: 'Sanity Studio URL',
      type: 'url',
      description: 'e.g., https://eagan-luxury.sanity.studio',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'clientId',
      title: 'Client ID',
      type: 'string',
      description: 'Unique identifier for dashboard URL (e.g., "eagan-luxury" for /dashboard/eagan-luxury)',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'resetToken',
      title: 'Password Reset Token',
      type: 'string',
      hidden: true,
      readOnly: true
    },
    {
      name: 'resetTokenExpiry',
      title: 'Reset Token Expiry',
      type: 'datetime',
      hidden: true,
      readOnly: true
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'lastLogin',
      title: 'Last Login',
      type: 'datetime',
      readOnly: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email'
    }
  }
}

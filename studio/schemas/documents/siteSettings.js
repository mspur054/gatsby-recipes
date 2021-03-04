export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Describe your site for search engines and social media.'
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'Keywords',
        description: 'Add keywords that describes your site.',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'author',
        type: 'reference',
        description: 'Publish an author and set a reference to them here.',
        title: 'Author',
        to: [{type: 'author'}]
      }
    ]
  }
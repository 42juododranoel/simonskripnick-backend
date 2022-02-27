export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'cosmetics', title: 'Cosmetics'},
    {name: 'contents', title: 'Contents'},
  ],
  fields: [
    // Main
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'main',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'main',
      options: {source: 'title'},
      validation: Rule => Rule.required(),
    },

    // Cosmetics
    {
      name: 'paperColor',
      title: 'Paper color',
      type: 'string',
      fieldset: 'cosmetics',
    },
    {
      name: 'textColor',
      title: 'Text color',
      type: 'string',
      fieldset: 'cosmetics',
    },
    {
      name: 'gradientTarget',
      title: 'Gradient target',
      type: 'string',
      fieldset: 'cosmetics',
    },
    // Contents
    {
      name: 'nodes',
      title: 'Nodes',
      type: 'array',
      fieldset: 'contents',
      of: [
        {
          title: 'Spread',
          type: 'spread',
        },
        {
          title: 'Chapter',
          type: 'chapter',
        },
        {
          title: 'Volume',
          type: 'volume',
        },
        {
          title: 'Cover',
          type: 'cover',
        }
      ],
    },
  ],
}

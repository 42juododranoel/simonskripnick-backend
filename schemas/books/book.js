export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fieldsets: [
    {name: 'main', title: 'Main'},
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

    // Contents
    {
      name: 'spreads',
      title: 'Spreads',
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
        }
      ],
    },
  ],
}

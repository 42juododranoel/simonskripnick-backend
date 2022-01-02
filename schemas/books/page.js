export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'editor',
    },
    {
      name: 'withLeadin',
      title: 'Show lead-in',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'withInitial',
      title: 'Show initial',
      type: 'boolean',
      initialValue: false,
    },
  ],
}

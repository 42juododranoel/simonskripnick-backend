export default {
  name: 'code',
  type: 'object',
  title: 'Code',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
    },
    {
      title: 'Syntax',
      name: 'syntax',
      type: 'string',
      initialValue: 'nohighlight',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'None', value: 'nohighlight'},
          {title: 'Python', value: 'python'},
          {title: 'JavaScript', value: 'javascript'},
        ]
      }
    },
    {
      title: 'Emotion',
      name: 'emotion',
      type: 'string',
      options: {
        list: ['positive', 'negative'],
      }
    },
  ]
}

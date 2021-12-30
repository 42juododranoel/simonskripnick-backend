export default {
  name: 'spread',
  title: 'Spread',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'number',
    },
    {
      name: 'firstPage',
      title: 'First page',
      type: 'reference',
      to: {type: 'page'},
    },
    {
      name: 'secondPage',
      title: 'Second page',
      type: 'reference',
      to: {type: 'page'},
    },
  ]
}

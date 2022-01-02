export default {
  name: 'spread',
  title: 'Spread',
  type: 'document',
  fields: [
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
    {
      name: 'doHideNumber',
      title: 'Hide number',
      type: 'boolean',
      initialValue: false,
    },
  ]
}

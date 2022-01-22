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
      name: 'firstImage',
      title: 'First image',
      type: 'image',
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      firstPageTitle: 'firstPage.title',
      secondPageTitle: 'secondPage.title',
    },
    prepare(selection) {
      const {firstPageTitle, secondPageTitle} = selection
      return {
        title: firstPageTitle ? firstPageTitle : secondPageTitle,
      }
    }
  }
}

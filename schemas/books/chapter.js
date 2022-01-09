export default {
  name: 'chapter',
  title: 'Chapter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      number: 'number',
    },
    prepare(selection) {
      const {number, title, subtitle} = selection
      return {
        title: `Глава ${number}. ${title}, или ${subtitle}`
      }
    }
  }
}

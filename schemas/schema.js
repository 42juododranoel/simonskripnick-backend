import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import editor from './editor'
import page from './books/page'
import spread from './books/spread'
import book from './books/book'
import post from './post'
import body from './fitness/body'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    editor,
    page,
    spread,
    book,
    post,
    body,
  ]),
})

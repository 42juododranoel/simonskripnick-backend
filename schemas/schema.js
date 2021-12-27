import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import editor from './editor'
import post from './post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    editor,
    post,
  ]),
})

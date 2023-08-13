import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
export const projectId = "g03uathm"
export const dataset = "production"
export default defineConfig({
  name: 'vsevoland',
  title: 'Vsevoland',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

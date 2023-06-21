import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'me',
  title: 'Me',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

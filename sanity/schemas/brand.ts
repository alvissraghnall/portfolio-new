import { defineType, defineField } from "sanity";

export default defineType({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
    ]
})
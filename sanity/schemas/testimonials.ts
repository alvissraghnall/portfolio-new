import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        // defineField({
        //     name: 'title',
        //     title: 'Title',
        //     type: 'string',
        // }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'feedback',
            title: 'Feedback',
            type: 'text',
        }),
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
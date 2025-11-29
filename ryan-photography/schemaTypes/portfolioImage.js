import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioImage',
  title: 'Portfolio Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Events', value: 'events'},
          {title: 'Portraits', value: 'portraits'}
        ]
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    })
  ]
})
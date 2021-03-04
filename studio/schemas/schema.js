// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import mainImage from './objects/mainImage'

import siteSettings from './documents/siteSettings'
import author from './documents/author'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "User",
      name: "user",
      type: "document",

      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          validation: (Rule) => [Rule.required().min(3).max(80)],
        },
        { title: "Email Address", name: "email", type: "string" },
        {
          title: "User Type",
          name: "userType",
          type: "boolean",
        },
      ],
    },
    {
      title: "Recipe",
      name: "recipe",
      type: "document",

      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          description: 'Recipe names should be catchy, descriptive, and not too long',
          validation: (Rule) => [Rule.required().min(3).max(80)],
        },
        {
          title: "Servings",
          name: "servings",
          type: "number",
          options: {
            list: [
              { title: '1 serving', value: 1 },
              { title: '2 servings', value: 2 },
              { title: '3 servings', value: 3 },
              { title: '4 servings', value: 4 },
              { title: '5 servings', value: 5 },
              { title: '6 servings', value: 6 },
              { title: '7 servings', value: 7 },
              { title: '8 servings', value: 8 },
              { title: '9 servings', value: 9 },
              { title: '10 servings', value: 10 }
            ],
            layout: 'dropdown',
          },
          validation: (Rule) => [Rule.required()],
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 200, // will be ignored if slugify is set
          }
        },
        {
          title: 'First made date',
          name: 'dateMade',
          type: 'date'
        },
        {
          title: 'Main Image',
          name: 'mainImage',
          type: 'mainImage'
        },

        {
          // ! Add category check
          title: "Category",
          name: "category",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Prep Time",
          name: "prepTime",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
        {
          title: "Ingredients",
          name: "ingredients",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required()
        },
        {
          title: "Instructions",
          name: "instructions",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required()
        },
        {
          title: "Notes",
          name: "notes",
          type: "string",
        }
      ],
    },
    , mainImage,
    siteSettings,
    author]),
});

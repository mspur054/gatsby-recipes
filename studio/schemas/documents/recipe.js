export default     {
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
        title: 'Published at',
        name: 'publishedAt',
        type: 'datetime',
        description: 'This can be used to schedule post for publishing',
        validation: (Rule) => [Rule.required()]
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
        name: "ingredientsList",
        type: "array",
        of: [{type: "ingredientSection"}],
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
  }
export default {
    name: 'ingredientSection',
    type: 'object',
    title: 'Ingredient Section',
    fields: [
        {
            name: 'sectionName',
            type:'string',
            title: 'Section Name',
            //Rule required if more than one ingredient section...
        },
        {
            title: "Ingredients",
            name: "ingredients",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required()
          },
    ],
    preview:{
        select: {
            title: 'sectionName',
            ingredient0: 'ingredients.0',
            ingredient1: 'ingredients.1',
            ingredient2: 'ingredients.2',

        },
        prepare({title, ingredient0, ingredient1, ingredient2})  {
            const ingredients = [ingredient0, ingredient1, ingredient2].filter(Boolean)
            const subtitle = ingredients.length > 0 ? `${ingredients.join(', ')}` : ''
            const hasMoreIngredients = Boolean(ingredient2)
            return {
                title: title ? title : 'Main',
                subtitle: hasMoreIngredients ? `${subtitle}...` : `${subtitle}`
            }
        }
    }
}
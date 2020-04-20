const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const recipeTemplate = path.resolve("./src/templates/recipe-template.js")

  const res = await graphql(
    `
      query {
        allSanityRecipe(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  res.data.allSanityRecipe.edges.forEach(edge => {
    const id = edge.node.id
    createPage({
      component: recipeTemplate,
      path: `/recipes/${edge.node.slug.current}`,
      context: { slug: edge.node.slug.current },
    })
  })
}

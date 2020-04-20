import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Recipe from "../components/recipe"
import GraphQLErrorList from "../components/graphql-error-list"

export const query = graphql`
  query($slug: String!) {
    sanityRecipe(slug: { current: { eq: $slug } }) {
      id
      name
      description
      slug {
        current
      }
      dateMade(formatString: "MMMM Do, YYYY")

      mainImage {
        caption
        alt
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        asset {
          _id
          url
        }
      }
    }
  }
`

const RecipeTemplate = props => {
  const { data, errors } = props
  const recipe = data && data.sanityRecipe
  // .width(600)
  // .height(Math.floor((9/16)*600))
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {recipe && <SEO title={recipe.name || "Untitled"} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {recipe && <Recipe {...recipe} />}
    </Layout>
  )
}

export default RecipeTemplate

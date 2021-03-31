import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import RecipePreview from '../components/recipe-preview'

import { mapEdgesToNodes } from '../lib/misc-helpers'
import {recipesTop,filters, recipes } from './recipes.module.scss'




const RecipePage = () => {
  const data = useStaticQuery(graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }  

  query myRecipes{
   
    recipes: allSanityRecipe
    (
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      )  
      {
      edges {
        node {
          id
          name
          slug {
            current
          }
          mainImage{
            ...SanityImage,
            alt
          }
          description
          publishedAt
          category
        }
      }
    }
  }
  `)

  const recipeNodes = (data || {}).recipes ? mapEdgesToNodes(data.recipes) : []

  return (
    <Layout>
      <h1>Recipes</h1>
      <div className={recipesTop}>
        <div className={filters}>
          <h2>Filter Recipes</h2>
        </div>
        <div className={recipes}>
          {recipeNodes.map((node) => {
            return (
              <RecipePreview {...node} key={node.id} />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default RecipePage

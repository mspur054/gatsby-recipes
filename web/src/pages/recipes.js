import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import RecipePreview from '../components/recipe-preview'

import {mapEdgesToNodes} from '../lib/misc-helpers'
import recipeStlyes from './recipes.module.scss'




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
    recipes: allSanityRecipe {
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
          dateMade
        }
      }
    }
  }
  `)

  const recipeNodes = (data || {}).recipes ? mapEdgesToNodes(data.recipes) : []

  return (
    <Layout>
      <h1>Recipes</h1>
      <div className={recipeStlyes.recipes_top}>
        <div className={recipeStlyes.filters}>
          <h2>Filter Recipes</h2>
        </div>
        <div className={recipeStlyes.recipes}>
          {recipeNodes.map(( node) => {
          return (
              <RecipePreview {...node} key={node.id}/>
            )
          })}
          </div>
      </div>
    </Layout>
  )
}

export default RecipePage

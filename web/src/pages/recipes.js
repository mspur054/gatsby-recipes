import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

import recipeStlyes from './recipes.module.scss'




const RecipePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityRecipe {
        edges {
          node {
            name
            slug{
                current
            }
            description
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Recipes</h1>
      <p>Recipes show up under here</p>
      <div className={recipeStlyes.recipes_top}>
        <div className={recipeStlyes.filters}>
          <h2>Filter Recipes</h2>
        </div>
        <div className={recipeStlyes.recipes}>
          {data.allSanityRecipe.edges.map(({ node }) => {
            return (
              <Link key={node.slug.current} className={recipeStlyes.recipe} to={`/recipes/${node.slug.current}`}>
              <article className={recipeStlyes.item} key={node.slug.current}>
                <figure></figure>
                <div className={recipeStlyes.textArea}>
         
                 
                    <h2 className={recipeStlyes.header}>{node.name}</h2>
                    {/* <p>{node.description}</p> */}
                  
                </div>
              </article>
              </Link>
            )
          })}</div>
      </div>
    </Layout>
  )
}

export default RecipePage
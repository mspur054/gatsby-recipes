import React from "react"
import { graphql } from 'gatsby'

import { buildImageObj, imageUrlFor } from '../lib/image-helper'
import Instructions from './intructions'

import { pageContentHeader, intro, introContent, detailContent, description as descriptionStyle, stats, introMedia, recipeDetail, recipeIngredients, recipeInstructions, recipeIngredientsListBullets } from "./recipe.module.scss"

const Recipe = props => {
  const { name, dateMade, description, mainImage, prepTime, category, ingredientsList, instructions } = props


  return (
    <main>
      <section className={pageContentHeader}>
        <article className={intro}>
          <div className={introContent}>
            <h1>{name}</h1>
            <p>{dateMade}</p>
            <div className={descriptionStyle}>
              <p>{description}</p>
            </div>
            <div className={stats}>
              <div>
                <span>PREP:</span>
                <span>{prepTime}</span>
              </div>
            </div>
          </div>
          <div className={introMedia}>
            {mainImage && mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .auto('format')
                  .url()}
                alt={mainImage.alt}
              />
            )}
          </div>
        </article>
      </section>
      <div className={detailContent}>
        <section>
          <div className={recipeDetail}>
            <aside className={recipeIngredients}>
              <h4>Ingredients</h4>
              {ingredientsList.map((ingredientsSection) => {
                return (
                  <div key={ingredientsSection._key}>
                    {ingredientsList.length > 0 ? <p>{ingredientsSection.sectionName}</p> : "WOT"}
                    <ul className={recipeIngredientsListBullets}>
                      {ingredientsSection.ingredients.map((ingredient) => {
                        return (<li key={ingredient}>
                          {ingredient}
                        </li>)
                      })}
                    </ul>
                  </div>
                )
              })}
            </aside>
            <article className={recipeInstructions}>
              <Instructions instructions={instructions} />
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Recipe

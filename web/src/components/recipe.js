import React from "react"
import { buildImageObj, imageUrlFor } from '../lib/image-helper'

import recipeStyles from "./recipe.module.scss"

const Recipe = props => {
  const { name, dateMade, description, mainImage } = props
  return (
    <main>
      <section className={recipeStyles.pageContentHeader}>
        <article className={recipeStyles.intro}>
          <div className={recipeStyles.intro_content}>
            <h1>{name}</h1>
            <p>{dateMade}</p>
            <div className={recipeStyles.description}>
              <p>{description}</p>
            </div>
            <div className={recipeStyles.stats}>
              <div>
                <span>PREP:</span>
                <span>20 mins</span>
              </div>
            </div>
          </div>
          <div className={recipeStyles.intro_media}>
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
      <section>
        <div>
          <p>This is where the instructions and ingredients go</p>
        </div>
      </section>
    </main>
  )
}

export default Recipe

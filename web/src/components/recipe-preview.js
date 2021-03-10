import React from "react"
import { Link } from "gatsby"

import { imageUrlFor, buildImageObj } from '../lib/image-helper'

import recipeStlyes from '../pages/recipes.module.scss'

const RecipePreview = (props) => {
    const { slug, ...recipe } = props
    return (
        <Link  className={recipeStlyes.recipe} to={`/recipes/${slug.current}`}>
            <article className={recipeStlyes.item} >

                <figure>
                    {recipe.mainImage && recipe.mainImage.asset && (
                        <img src={imageUrlFor(buildImageObj(recipe.mainImage))
                            .width(600)
                            .height(Math.floor((11 / 16) * 600))
                            .auto('format')
                            .url()}
                            alt={recipe.mainImage.alt} />
                    )}
                </figure>
                <div className={recipeStlyes.textArea}>
                    <h2 className={recipeStlyes.header}>{recipe.name}</h2>
                    {/* <p>{node.description}</p> */}
                </div>
            </article>
        </Link>
    )
}

export default RecipePreview;
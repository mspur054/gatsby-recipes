import React from "react"
import { Link } from "gatsby"

import { imageUrlFor, buildImageObj } from '../lib/image-helper'

import {recipe as recipeStyle, item, textArea, header} from '../pages/recipes.module.scss'

const RecipePreview = (props) => {
    const { slug, ...recipe } = props
    return (
        <Link  className={recipeStyle} to={`/recipes/${slug.current}`}>
            <article className={item} >

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
                <div className={textArea}>
                    <h2 className={header}>{recipe.name}</h2>
                    {/* <p>{node.description}</p> */}
                </div>
            </article>
        </Link>
    )
}

export default RecipePreview;
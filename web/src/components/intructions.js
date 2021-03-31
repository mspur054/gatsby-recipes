import React from "react"

import {recipeInstructionsListBullets} from "./recipe.module.scss"


const Instructions = props => {
    const {instructions} = props

    return (
        <>
        <h4>Instructions</h4>
        <div>
            <ol className={recipeInstructionsListBullets}>
            {instructions.map((instruction, index) => {
                return (<li key={index}>
                  <p>{instruction}</p>
                </li>)
              })}
            </ol>
        </div>
        </>
    )
}

export default Instructions



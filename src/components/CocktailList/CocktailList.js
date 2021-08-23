import React from 'react'
import CocktailItem from '../CocktailItem/CocktailItem'

const CocktailList = ({cocktails}) => {
    const showCocktail = (c) => {
        alert(`This Yummy ${c} Cocktail is Freshly Made For You !`)
      }
    return (
        <div>
        {

        cocktails.map((cocktail,index) => <CocktailItem cocktail={cocktail} key={index} showCocktail={showCocktail}/> )

        }
        </div>
    )
}

export default CocktailList

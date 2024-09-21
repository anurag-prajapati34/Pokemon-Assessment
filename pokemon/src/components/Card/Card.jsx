import React, { useEffect, useState } from 'react'
import '.Card.css'

export const Card = ({pokemonData}) => {

const abilities= pokemonData.abilities;

  return (
    <div className='card'>

        <img  src={pokemonData?pokemonData.imageURL:'' || "no image" }></img>
        <h2>{pokemonData.name || "no name"}</h2>
        <div 
        className='h-w'><p>Height:{pokemonData.height || "no height"}</p>
        <p>Weigth:{pokemonData.weight || "no weight"}</p>
        </div>
        <div className='abilities'>
          {
            abilities.length>0?abilities.map((ablity)=>{
return <p>{ablity.ability.name}</p>
            }):''
          }
        </div>

    </div>
  )
}

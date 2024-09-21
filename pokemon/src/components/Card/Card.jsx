import React, { useEffect, useState } from "react";
import "./Card.css";

export const Card = ({ pokemonData }) => {
  const abilities = pokemonData.abilities;

  return (
    <div className="card">
      {/*image of pokemon */}
      <img src={pokemonData ? pokemonData.imageURL : "" || "no image"}></img>
      {/*Name*/}
      <h2>{pokemonData.name || "no name"}</h2>
      {/*body attributes height and weight */}
      <div className="h-w">
        <p>Height:{pokemonData.height || "no height"}</p>
        <p>Weigth:{pokemonData.weight || "no weight"}</p>
      </div>
      {/*abilities */}
      <div className="abilities">
        {abilities.length > 0
          ? abilities.map((ablity) => {
              return <p>{ablity.ability.name}</p>;
            })
          : ""}
      </div>
    </div>
  );
};

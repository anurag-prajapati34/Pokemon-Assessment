import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { PokemonContext } from "./contexts/PokemonContext";
import { Card } from "./components/Card/Card";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";

function App() {
  const { pokemons, pokemonsData, searchedPokemon } =
    useContext(PokemonContext);

  return (
    <div className="container">
      {/*Search component for search */}
      <Search />

      {/*displaying cards */}
      <div className="display-cards">
        {searchedPokemon ? (
          <Card pokemonData={searchedPokemon} />
        ) : pokemonsData.length > 0 ? (
          pokemonsData.map((pokemon, index) => {
            return <Card key={index} pokemonData={pokemon} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div>
        {/*foooter component */}
      <Footer/>
      </div>
    </div>
  );
}

export default App;

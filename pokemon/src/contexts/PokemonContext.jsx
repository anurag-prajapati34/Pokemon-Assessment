import React, { createContext, useEffect, useState } from "react";

const PokemonContext = createContext();
const PokemonContextProviderr = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  const [isloading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [pokemonsData, setPokemonsData] = useState([]);
  const [searchedPokemon,setSearchedPokemon]=useState();

  const fetchAllPokemons = () => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
         
          setPokemons(responseData.results);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("following erro occured:", err);
      });
  };

  const fetchPokemonData = async (api) => {
 
    try {
      const response = await fetch(api);

      if (response.ok) {
        const responseData = await response.json();
      
        

        return {
          name: responseData.name,
          imageURL: responseData.sprites.front_default,
          height: responseData.height,
          weight: responseData.weight,
          abilities:responseData.abilities
        };
      }
    } catch (err) {
      console.log("following erro occured:", err);
      return {};
    }
  };


  const searchForPokemon=async (pokemonName)=>{

try{
  const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  if(response.ok){
    const responseData=await response.json();
    

setSearchedPokemon({
  name:responseData.name,
  imageURL:responseData.sprites.front_default,
  weight:responseData.weight,
  height:responseData.height,
  abilities:responseData.abilities

})

  }else{
    alert("Enter correct name")
  }
  
}catch(err){
  console.log("Following error occured:",err)

}

  }



  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
   
    const fetchAllPokemonsDetail = async () => {
      if (pokemons) {
        const dataArray = await Promise.all(
          pokemons.map((item) => fetchPokemonData(item.url))
        );
     
        setPokemonsData(dataArray);
      }
    };

    fetchAllPokemonsDetail();
  }, [pokemons]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        pokemon,
        pokemonsData,
        searchForPokemon,
        searchedPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProviderr };

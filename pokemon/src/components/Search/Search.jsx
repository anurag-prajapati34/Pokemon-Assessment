import React, { useContext, useState } from "react";
import './Search.css'
import { PokemonContext } from "../../contexts/PokemonContext";

export const Search = () => {

  const {searchForPokemon}=useContext(PokemonContext)
  const [searchPokemon,setSearchPokemon]=useState();

  const handleSearchInput=(e)=>{
    const search=e.target.value;
    setSearchPokemon(search);

  }
  const handleSearchBtnClick=()=>{
    if(searchPokemon){
searchForPokemon(searchPokemon)
    }else{
      alert("Please Enter Pokemon Name...")
    }
  }
  return (
    <div className="search-container">
      <input onChange={handleSearchInput}  placeholder="Search Pokemon..."></input>
      <button onClick={handleSearchBtnClick}>Search</button>
    </div>
  );
};

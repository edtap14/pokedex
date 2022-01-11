import { combineReducers } from "redux";
import { allPokemon } from "./getPokemons";
import { getPokemon } from "./getPokemon";
import { getDetailPokemons } from "./getDetailPokemons";
import { getTypes } from "./getTypes";

const rootReducer = combineReducers({
  pokemons: allPokemon,
  pokemon: getPokemon,
  detail: getDetailPokemons,
  type: getTypes
});

export default rootReducer;

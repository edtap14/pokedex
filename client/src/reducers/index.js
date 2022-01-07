import { combineReducers } from "redux";
import { allPokemon } from "./getPokemons";
import { getPokemon } from "./getPokemon";

const rootReducer = combineReducers({
  pokemons: allPokemon,
  pokemon: getPokemon
});

export default rootReducer;

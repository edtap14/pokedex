import { combineReducers } from "redux";
import { allPokemon } from "./getPokemons";

const rootReducer = combineReducers({
  pokemons: allPokemon
});

export default rootReducer;

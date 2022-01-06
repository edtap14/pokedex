const initialState = {
  pokemons: []
};

export function allPokemon(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: payload
      };
    default:
      return state;
  }
}

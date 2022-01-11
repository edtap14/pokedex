const initialState = {
  detailPokemon: []
};

export function getDetailPokemons(state = initialState, { type, payload }) {
  switch (type) {
    case "POKEMON_DETAIL":
      return {
        ...state,
        detailPokemon: payload
      };
    default:
      return state;
  }
}

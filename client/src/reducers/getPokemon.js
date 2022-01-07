const initialState = {
  pokemon: []
};

export function getPokemon(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemon: payload
      };
    default:
      return state;
  }
}

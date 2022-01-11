const initialState = {
  typesPokemon: []
};

export function getTypes(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_TYPES":
      return {
        ...state,
        typesPokemon: payload
      };
    default:
      return state;
  }
}

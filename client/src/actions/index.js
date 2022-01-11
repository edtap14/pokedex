import axios from "axios";

export const getPokemons = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/pokemons").then((response) => {
      //   console.log(response);
      const data = response.data;
      dispatch({
        type: "GET_POKEMONS",
        payload: data
      });
    });
  };
};

export const getPokemon = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/pokemons/?name=${name}`)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: "GET_POKEMON",
          payload: data
        });
      });
  };
};

export const detailPokemon = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/pokemons/${id}`).then((response) => {
      const data = response.data;
      dispatch({
        type: "POKEMON_DETAIL",
        payload: data
      });
    });
  };
};

export const getTypes = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/types`).then((response) => {
      const data = response.data;
      dispatch({
        type: "GET_TYPES",
        payload: data
      });
    });
  };
};

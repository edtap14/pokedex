import axios from "axios";

export const getPokemons = () => {
  return (dispatch, getState) => {
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

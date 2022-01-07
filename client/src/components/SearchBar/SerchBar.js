import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBar.module.css";
import { getPokemon } from "../../actions";
// import CardSearch from "../CardSearch/CardSearch";

export default function SerchBar() {
  const [namePokemon, setNamePokemon] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(namePokemon.toLowerCase()));
  }, [namePokemon]);

  const pokemonBuscado = useSelector((state) => state.pokemon.pokemon);
  //   console.log(pokemonBuscado);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("click");
    setNamePokemon(search);
    setSearch("");
  };
  return (
    <div className={style.SerchBarComponent}>
      <div>
        <input
          className={style.input}
          placeholder="Busca tu pokemon"
          onChange={handleChange}
          value={search}
        ></input>
      </div>
      <div className={style.divButton}>
        <button className={style.btn} onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>
      <div>
        {pokemonBuscado.length > 1 ? (
          <span></span>
        ) : (
          //   <CardSearch pokemonBuscado={pokemonBuscado} />
          <div>
            <div className={style.divCardSearch}>
              {/* <p>Tu Pokemon Buscado es:</p> */}
            </div>
            <div className={style.cardSearch}>
              <div className={style.divTitle}>
                <p>{pokemonBuscado.name}</p>
              </div>
              <div className={style.divImg}>
                <img alt="pokemon" src={pokemonBuscado.img}></img>
              </div>
              <div className={style.divData}>
                <p>
                  HP: <span>{pokemonBuscado.hp}</span>
                </p>
                <p>
                  Attack: <span>{pokemonBuscado.attack}</span>
                </p>
                <p>
                  Defense: <span>{pokemonBuscado.defense}</span>
                </p>
                <p>
                  height: <span>{pokemonBuscado.height}</span>
                </p>
                <p>
                  speed: <span>{pokemonBuscado.speed}</span>
                </p>
                <p>
                  weight: <span>{pokemonBuscado.weight}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

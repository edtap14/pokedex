import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import { getPokemons } from "../../actions";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const pokemons = useSelector((state) => state.pokemons.pokemons);
  // console.log(pokemons);
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={style.divCardsHome}>
        {pokemons?.length > 0 ? (
          pokemons.map((p) => {
            return (
              <Cards
                name={p.name}
                attack={p.attack}
                img={p.img}
                types={p.types}
              />
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

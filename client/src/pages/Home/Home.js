import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import { getPokemons } from "../../actions";
import style from "./Home.module.css";

export default function Home(props) {
  const prev = "<< Prev";
  const next = "Next >>";
  const numTarjetas = 12;

  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const pokemons = useSelector((state) => state.pokemons.pokemons);

  const pagePokemons = () => {
    return pokemons.slice(currentPage, currentPage + numTarjetas);
  };

  const nextPage = () => {
    if (currentPage < 30) setCurrentPage(currentPage + numTarjetas);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - numTarjetas);
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={style.divButtons}>
        <button className={style.buttons} type="button" onClick={prevPage}>
          {prev}
        </button>
        <button className={style.buttons} type="button" onClick={nextPage}>
          {next}
        </button>
      </div>
      <div className={style.divCardsHome}>
        {pokemons?.length > 0 ? (
          pagePokemons().map((p) => {
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
      {/* <p>Todos los derechos reservados: Edgar Tapia</p> */}
    </div>
  );
}

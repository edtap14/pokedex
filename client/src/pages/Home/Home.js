import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SerchBar";
import { getPokemons, getTypes } from "../../actions";
import style from "./Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState({
    type: []
  });

  console.log(pokemon);

  const prev = "<< Prev";
  const next = "Next >>";
  const numTarjetas = 12;

  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  // console.log(data);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch, pokemon]);

  const pokemons = useSelector((state) => state.pokemons.pokemons);
  // console.log(pokemons);
  const types = useSelector((state) => state.type.typesPokemon);
  // console.log();

  let a = pokemons.filter((p) => {
    for (let i = 0; i < p.types.length; i++) {
      if (pokemon.type.indexOf(p.types[i]) !== -1) {
        return p;
      }
    }
  });

  // console.log(a);

  const pagePokemons = () => {
    const b = a[0] === undefined ? pokemons : a;
    return b.slice(currentPage, currentPage + numTarjetas);
  };

  console.log(pagePokemons());

  const nextPage = () => {
    if (currentPage < 30) setCurrentPage(currentPage + numTarjetas);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - numTarjetas);
  };

  const handlechecked = (e) => {
    if (pokemon.type.includes(e.target.value)) {
      setPokemon({
        type: pokemon.type.filter((g) => g !== e.target.value)
      });
    } else {
      setPokemon({
        ...pokemon,
        type: [...pokemon.type, e.target.value]
      });
    }
  };

  const sortByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  function dataOrdenadaA(e) {
    e.preventDefault();

    pokemons.sort(sortByName);
    setData(pokemons);
    setData([]);
  }
  function dataOrdenadaZ(e) {
    e.preventDefault();
    pokemons.sort(sortByName).reverse();
    setData(pokemons);
    setData([]);
  }

  const sortByAttack = (a, b) => {
    if (a.attack < b.attack) {
      return -1;
    }
    if (a.attack > b.attack) {
      return 1;
    }
    return 0;
  };

  function dataOrdenadaAttakA(e) {
    e.preventDefault();
    pokemons.sort(sortByAttack);
    setData(pokemons);
    setData([]);
  }
  function dataOrdenadaAttakB(e) {
    e.preventDefault();
    pokemons.sort(sortByAttack).reverse();
    setData(pokemons);
    setData([]);
  }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={style.searchDivBar}>
        <SearchBar />
      </div>
      <div className={style.divButtons}>
        <button className={style.buttons} type="button" onClick={prevPage}>
          {prev}
        </button>
        <button className={style.buttons} type="button" onClick={nextPage}>
          {next}
        </button>
      </div>
      <div className={style.divFiltrosHome}>
        <div>
          <button onClick={dataOrdenadaA}>A - Z</button>
          <button onClick={dataOrdenadaZ}>Z - A</button>
          <button onClick={dataOrdenadaAttakB}>Attack +</button>
          <button onClick={dataOrdenadaAttakA}>Attack -</button>
        </div>
      </div>
      <div className={style.checkDiv}>
        <div>
          {/* <select name="type" onChange={(e) => handleChangeTypes(e)}>
            <option>Types:</option> */}
          {types.map((t) => {
            return (
              <div>
                <lebel>{t.name?.toUpperCase()}</lebel>
                <input
                  onChange={handlechecked}
                  type="checkbox"
                  name={t.mame}
                  value={t.name}
                ></input>
              </div>
            );
          })}
          {/* </select> */}
        </div>
      </div>
      <div className={style.divCardsHome}>
        {pokemons?.length > 0 ? (
          pagePokemons().map((p) => {
            return (
              <Cards
                key={p.id}
                id={p.id}
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

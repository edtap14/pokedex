import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import { detailPokemon } from "../../actions";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  // const [id, setId] = useState(0);

  const pagina = window.location.href.split("/")[4];
  // console.log(pagina);

  const dispatch = useDispatch();

  useEffect(() => {
    // setId(pagina);
    dispatch(detailPokemon(pagina));
  }, [pagina]);

  // console.log(id);

  const { attack, defense, height, hp, id, img, name, speed, types, weight } =
    useSelector((state) => state.detail.detailPokemon);

  // cosole.log(types);

  return (
    <div>
      <Nav />
      <div className={style.divTitle}>
        <h2 className={style.title}>{name?.toUpperCase()}</h2>
      </div>
      <div className={style.info}>
        <img className={style.img} alt="pokemon" src={img}></img>
      </div>
      <div className={style.wrap}>
        <div className={style.tarjeta}>
          <p className={style.p}>
            Atackk: <span>{attack}</span>
          </p>
          <p className={style.p}>
            Defense: <span>{defense}</span>
          </p>
        </div>
        <div className={style.tarjeta}>
          <p className={style.p}>
            height: <span>{height}</span>
          </p>
          <p className={style.p}>
            hp: <span>{hp}</span>
          </p>
        </div>
        <div className={style.tarjeta}>
          <p className={style.p}>
            speed: <span>{speed}</span>
          </p>
          <p className={style.p}>
            weight: <span>{weight}</span>
          </p>
        </div>
        <div className={style.tarjeta}>
          <p className={style.p}>types:</p>
          {types
            ? types.map((t) => {
                return <p className={style.p}>{t} /</p>;
              })
            : "no hay tipos"}
        </div>
      </div>
      <div className={style.divBtn}>
        <Link to="/home">
          <button className={style.btn} type="">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}

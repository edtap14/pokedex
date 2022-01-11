import React from "react";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards({ name, attack, img, types, id }) {
  return (
    <div className={style.divCardsCards}>
      <div className={style.divTitle}>
        <p>{name}</p>
      </div>
      <div className={style.divImg}>
        <img alt="pokemon" src={img}></img>
      </div>
      <div className={style.divData}>
        <p> Attack: {attack}</p>
        {/* <p>Weight: {weight}</p>
        <p>height: {height}</p> */}
        <p>
          Types:
          {types.map((t) => {
            return <span> {t[0].toUpperCase() + t.slice(1)} / </span>;
          })}
        </p>
      </div>
      <div className={style.divBtn}>
        <Link to={`/detail/${id}`}>
          <button className={style.btn}>Más Info</button>
        </Link>
      </div>
    </div>
  );
}

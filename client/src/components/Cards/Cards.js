import React from "react";
import style from "./Cards.module.css";

export default function Cards({ name, attack, img, types }) {
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
            return <p>{t[0].toUpperCase() + t.slice(1)}</p>;
          })}
        </p>
      </div>
    </div>
  );
}

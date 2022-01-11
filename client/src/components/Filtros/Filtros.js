import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../actions";
import style from "./Filtros.module.css";

export default function Filtros() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const types = useSelector((state) => state.type.typesPokemon);
  //   console.log(types);

  return (
    <div className={style.divTypes}>
      <select>
        <option>Types:</option>
        {types.map((t) => {
          return (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          );
        })}
      </select>
      <select name="Sort By">
        <option value="Sort by:">Ordenar por:</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      </select>
    </div>
  );
}

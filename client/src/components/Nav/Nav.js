import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={style.principalNav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Pokedex</Link>
        </li>
      </ul>
    </div>
  );
}

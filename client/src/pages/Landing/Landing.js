import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function landing() {
  return (
    <div className={style.body}>
      <div className={style.principalDiv}>
        <div className={style.title}></div>
      </div>
      <div className={style.divButton}>
        <Link to="/home">
          <button className={style.btn} type="submit">
            Go
          </button>
        </Link>
      </div>
    </div>
  );
}

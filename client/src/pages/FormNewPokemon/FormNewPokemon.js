import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import style from "./FormNewPokemon.module.css";
import img from "../../backgrounds/registroPokemon.png";

export default function FormNewPokemon() {
  const [data, setData] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: []
  });

  const nuevaData = {
    name: data.name,
    hp: data.hp,
    attack: data.attack,
    defense: data.defense,
    speed: data.speed,
    height: data.height,
    weight: data.weight,
    types: data.types
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleChecked = (e) => {
    if (data.types.includes(e.target.value)) {
      setData({
        ...data,
        types: data.types.filter((t) => t !== e.target.value)
      });
    } else {
      setData({
        ...data,
        types: [...data.types, e.target.value]
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/pokemons", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevaData)
    });
    const pokemon = await response.json();
    // console.log(pokemon);
    alert(`El pokemon ${pokemon.name.toUpperCase()} ha sido capturado`);
    setData({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: []
    });
  };

  return (
    <div>
      <Nav />
      <div className={style.titleNewPokemon}>
        <img className={style.img} src={img}></img>
      </div>
      <div className={style.divForm}>
        <form className={style.form}>
          <div className={style.labelsDiv}>
            <label>Name:</label>
            <input
              placeholder="Nombre del pokemon"
              name="name"
              type="text"
              onChange={handleChange}
            ></input>
            <label>Nivel de Salud:</label>
            <input
              placeholder="Selecciona nivel de Salud"
              name="hp"
              type="number"
              onChange={handleChange}
            ></input>
            <label>Nivel de ataque:</label>
            <input
              placeholder="Selecciona nivel de ataque"
              name="attack"
              type="number"
              onChange={handleChange}
            ></input>
            <label>Nivel de defensa: </label>
            <input
              placeholder="Selecciona el nivel de defensa"
              name="defense"
              type="number"
              onChange={handleChange}
            ></input>
            <label>Nivel de velocidad: </label>
            <input
              placeholder="Selecciona su nivel de velocidad"
              name="speed"
              type="number"
              onChange={handleChange}
            ></input>
            <label>Selecciona altura (cm) </label>
            <input
              placeholder="Selecciona altura (cm)"
              name="height"
              type="number"
              onChange={handleChange}
            ></input>
            <label>Selecciona Peso (grs)</label>
            <input
              placeholder="Selecciona el peso"
              name="weight"
              type="number"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <p>Selecciona los tipos de pokemon al que pertenece tu pokemon</p>
            <label>Normal</label>
            <input
              type="checkbox"
              name="normal"
              value="1"
              onChange={handleChecked}
            ></input>
            <label>Fighting</label>
            <input
              type="checkbox"
              name="fighting"
              value="2"
              onChange={handleChecked}
            ></input>
            <label>Flying</label>
            <input
              type="checkbox"
              name="flying"
              value="3"
              onChange={handleChecked}
            ></input>
            <label>Poison</label>
            <input
              type="checkbox"
              name="poison"
              value="4"
              onChange={handleChecked}
            ></input>
            <label>Ground</label>
            <input
              type="checkbox"
              name="ground"
              value="5"
              onChange={handleChecked}
            ></input>
            <label>rock</label>
            <input
              type="checkbox"
              name="rock"
              value="6"
              onChange={handleChecked}
            ></input>
            <label>bug</label>
            <input
              type="checkbox"
              name="bug"
              value="7"
              onChange={handleChecked}
            ></input>
            <label>ghost</label>
            <input
              type="checkbox"
              name="ghost"
              value="8"
              onChange={handleChecked}
            ></input>
            <label>fire</label>
            <input
              type="checkbox"
              name="fire"
              value="9"
              onChange={handleChecked}
            ></input>
            <label>steel</label>
            <input
              type="checkbox"
              name="steel"
              value="10"
              onChange={handleChecked}
            ></input>
            <label>water</label>
            <input
              type="checkbox"
              name="water"
              value="11"
              onChange={handleChecked}
            ></input>
            <label>grass</label>
            <input
              type="checkbox"
              name="grass"
              value="12"
              onChange={handleChecked}
            ></input>
            <label>electric</label>
            <input
              type="checkbox"
              name="electric"
              value="13"
              onChange={handleChecked}
            ></input>
            <label>ice</label>
            <input
              type="checkbox"
              name="ice"
              value="14"
              onChange={handleChecked}
            ></input>
            <label>dragon</label>
            <input
              type="checkbox"
              name="dragon"
              value="15"
              onChange={handleChecked}
            ></input>
            <label>psychic</label>
            <input
              type="checkbox"
              name="psychic"
              value="16"
              onChange={handleChecked}
            ></input>
            <label>dark</label>
            <input
              type="checkbox"
              name="dark"
              value="17"
              onChange={handleChecked}
            ></input>
            <label>unknown</label>
            <input
              type="checkbox"
              name="unknown"
              value="18"
              onChange={handleChecked}
            ></input>
            <label>shadow</label>
            <input
              type="checkbox"
              name="shadow"
              value="19"
              onChange={handleChecked}
            ></input>
            <label>fairy</label>
            <input
              type="checkbox"
              name="fairy"
              value={20}
              onChange={handleChecked}
            ></input>
          </div>
          <div>
            <button className={style.btn} onClick={onSubmit} type="submit">
              Captura tu pokemon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

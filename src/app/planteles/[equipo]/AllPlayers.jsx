"use client";
import { useState } from "react";
import style from "../ListadoFantaEquipos.module.css";
import { SinglePlayer } from "./SinglePlayer";

export function AllPlayers({ jugadores }) {
  const [posicion, setPosicion] = useState("ALL");

  let filteredPlayers =
    posicion === "ALL"
      ? jugadores
      : jugadores.filter((jugador) => {
          if (posicion === "MED") {
            return jugador.posicion === "MED" || jugador.poli === true;
          } else {
            return jugador.posicion === posicion;
          }
        });

  function filterPosicion(event) {
    const value = event.target.value;
    setPosicion(event.target.value);
  }

  return (
    <section>
      <div className={style.fantaContainer}>
        <button onClick={filterPosicion} value={"ARQ"} className={style.button}>
          ARQUEROS
        </button>
        <button onClick={filterPosicion} value={"DEF"} className={style.button}>
          DEFENSORES
        </button>
        <button onClick={filterPosicion} value={"MED"} className={style.button}>
          MEDIOCAMPISTAS
        </button>
        <button onClick={filterPosicion} value={"DEL"} className={style.button}>
          DELANTEROS
        </button>
        <button onClick={filterPosicion} value={"ALL"} className={style.button}>
          TODOS
        </button>
      </div>

      <div className={style.flexCenter}>
        {filteredPlayers.map((jugador) => (
          <SinglePlayer key={jugador.id} jugador={jugador} />
        ))}
      </div>
    </section>
  );
}

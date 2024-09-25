"use client";
import { useState } from "react";
import style from "../ListadoFantaEquipos.module.css";
import { SinglePlayer } from "./SinglePlayer";

export function AllPlayers({ jugadores }) {
  const [posicion, setPosicion] = useState("");

  const help = [
    { id: "1", pos: "ARQ" },
    { id: "2", pos: "DEF" },
    { id: "3", pos: "MED" },
    { id: "4", pos: "DEL" },
  ];

  let filteredPlayers =
    posicion === ""
      ? jugadores
      : jugadores.filter((jugador) => {
          let selectedPos = help.find((h) => h.id === posicion);
          if (!selectedPos) {
            return true;
          }
          if (selectedPos.pos === "MED") {
            //mediocampistas + polis
            return (
              jugador.posicion === selectedPos.pos || jugador.poli === true
            );
          } else {
            return jugador.posicion === selectedPos.pos;
          }
        });

  function filterPosicion(event) {
    const value = event.target.value;
    setPosicion(event.target.value);
  }

  return (
    <section>
      <div className={style.fantaContainer}>
        <button onClick={filterPosicion} value={"1"} className={style.button}>
          ARQUEROS
        </button>
        <button onClick={filterPosicion} value={"2"} className={style.button}>
          DEFENSORES
        </button>
        <button onClick={filterPosicion} value={"3"} className={style.button}>
          MEDIOCAMPISTAS
        </button>
        <button onClick={filterPosicion} value={"4"} className={style.button}>
          DELANTEROS
        </button>
        <button onClick={filterPosicion} value={""} className={style.button}>
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

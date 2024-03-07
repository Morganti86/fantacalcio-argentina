"use client";
import { useState } from "react";
import style from "../ListadoFantaEquipos.module.css";
import { SinglePlayer } from "./SinglePlayer";

export function AllPlayers({ players }) {
  const [position, setPositions] = useState("ALL");

  let filteredPlayers =
    position === "ALL"
      ? players
      : players.filter((player) => {
          if (position === "VOL") {
            return player.position === "VOL" || player.poli === true;
          } else {
            return player.position === position;
          }
        });

  function filterPosition(event) {
    const value = event.target.value;
    setPositions(event.target.value);
  }

  return (
    <section>
      <div className={style.fantaContainer}>
        <button onClick={filterPosition} value={"ARQ"} className={style.button}>
          ARQUEROS
        </button>
        <button onClick={filterPosition} value={"DEF"} className={style.button}>
          DEFENSORES
        </button>
        <button onClick={filterPosition} value={"VOL"} className={style.button}>
          MEDIOCAMPISTAS
        </button>
        <button onClick={filterPosition} value={"DEL"} className={style.button}>
          DELANTEROS
        </button>
        <button onClick={filterPosition} value={"ALL"} className={style.button}>
          TODOS
        </button>
      </div>

      <div className={style.flexCenter}>
        {filteredPlayers.map((player) => (
          <SinglePlayer key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import style from "./Subasta.module.css";

export const SubastaEquipo = ({ equipos, jugadores, jugadorActual }) => {
  return (
    <div className={style.flex}>
      {equipos.map((equipo, index) => (
        <div
          key={index}
          style={{
            opacity: equipo.pendiente === true ? 1 : 0.3,
            backgroundColor:
              equipo.equipo === jugadores[jugadorActual].equipo
                ? "black"
                : "transparent",
          }}>
          <img
            className={style.imageTeam}
            src={`/LeagueTeams/${equipo.equipo}.webp`}
            width={43}
            height={43}
            alt={`${equipo.equipo} image`}
          />
        </div>
      ))}
    </div>
  );
};

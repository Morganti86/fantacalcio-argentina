import React from "react";
import style from "./Subasta.module.css";

export const SubastaEquipo = ({ equipos }) => {
  return (
    <div className={style.flex}>
      {equipos.map((equipo) => (
        <div
          key={equipo.id}
          style={{ opacity: equipo.estado == false ? 1 : 0.3 }}>
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

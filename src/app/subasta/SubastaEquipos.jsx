import React from "react";
import style from "./Subasta.module.css";

export const SubastaEquipo = ({ equipos, jugadores, jugadorActual }) => {
  return (
    <div className={style.flex}>
      {equipos.map((equipo, index) => (
        <div
          className={style.containerImageTeam}
          key={index}
          style={{
            opacity: equipo.pendiente === true ? 1 : 0.3,
            // backgroundColor:
            //   equipo.equipo === jugadores[jugadorActual].equipo
            //     ? "black"
            //     : "transparent",
            boxShadow:
              equipo.equipo === jugadores[jugadorActual].equipo
                ? "0 0 3px 3px ivory" // Cambia el color de la sombra a negro cuando el equipo está seleccionado
                : "0 0 1px 1px transparent", // De lo contrario, usa una sombra transparente
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

"use client";
import { useEffect, useState } from "react";
import style from "./Subasta.module.css";

export default function Subasta() {
  const [posiciones, setPosiciones] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [fantaEquipos, setFantaEquipos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posiciones
        const posicionesResponse = await fetch("/api/getPosiciones");
        if (!posicionesResponse.ok) {
          throw new Error("Failed to fetch posiciones data");
        }
        const posicionesData = await posicionesResponse.json();
        setPosiciones(posicionesData);

        // Fetch equipos
        const equiposResponse = await fetch("/api/getEquipos");
        if (!equiposResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const equiposData = await equiposResponse.json();
        setEquipos(equiposData);

        // Fetch FantaEquipos
        const fantaEquiposResponse = await fetch("/api/getFantaEquipos");
        if (!equiposResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const fantaEquiposData = await fantaEquiposResponse.json();
        setFantaEquipos(fantaEquiposData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={style.container}>
      <h1 className="title">SUBASTA</h1>
      <div className={style.flex}>
        {equipos.map((equipo) => (
          <div key={equipo.id}>
            <img
              className={style.imageTeam}
              src={`/LeagueTeams/${equipo.equipo}.webp`}
              width={40}
              height={40}
              alt={`${equipo.equipo} image`}
            />
          </div>
        ))}
      </div>
      {posiciones.map((posicion) => (
        <div key={posicion.index}>{posicion.posicion}</div>
      ))}
      {fantaEquipos.map((equipo) => (
        <div key={equipo.fanta_equipo}>{equipo.fanta_equipo}</div>
      ))}
    </section>
  );
}

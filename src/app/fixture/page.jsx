"use client";
import { useState, useEffect } from "react";
import style from "./fixture.module.css";

export default function Fixture() {
  const [fantaEquipos, setFantaEquipos] = useState([]);
  const [fixture, setFixture] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchEquipos = async () => {
      try {
        // Fetch FantaEquipos
        const fantaEquiposResponse = await fetch("/api/getFantaEquipos");
        if (!fantaEquiposResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const fantaEquiposData = await fantaEquiposResponse.json();
        const equiposList = fantaEquiposData.map((fanta) => {
          return (fanta.fanta_equipo)
        });
        const sortedEquipos = equiposList.sort((a, b) => a.localeCompare(b));
        setFantaEquipos(sortedEquipos);
        generarFixture(sortedEquipos);
        setDataLoaded(true); // Mark data as loaded
      } catch (error) {
        console.log("Failed to fetch fanta_equipos data.");
      }
    };
    fetchEquipos();
  }, []);

  // Función para generar el fixture
  const generarFixture = (equipos) => {
    const n = equipos.length;
    const jornadas = [];
    const equiposRotables = equipos.slice(1); // Exceptuamos el primer equipo
    for (let i = 0; i < n - 1; i++) {
      const jornada = [];
      for (let j = 0; j < n / 2; j++) {
        const equipoLocal = j === 0 ? equipos[0] : equiposRotables[j - 1];
        const equipoVisitante = equiposRotables[n - 2 - j];
        jornada.push({ equipoLocal, equipoVisitante });
      }
      equiposRotables.push(equiposRotables.shift()); // Rotar equipos
      jornadas.push(jornada);
    }
    setFixture(jornadas);
  };

  return (
    <section className={style.container}>
      <h1 className="title">FIXTURE</h1>
      {fixture.map((jornada, jornadaIndex) => (
        <div key={jornadaIndex}>
          <h2>FECHA {jornadaIndex + 1}</h2>
          {jornada.map((partido, partidoIndex) => (
            <div key={partidoIndex}>
              {partido.equipoLocal}{" "}
              <img
                className={style.crest}
                src={`/FantaTeams/${partido.equipoLocal}.svg`}
                width={20}
                height={20}
                alt={`${partido.equipoLocal} crest`}
              />{" "}
              vs{" "}
              <img
                className={style.crest}
                src={`/FantaTeams/${partido.equipoVisitante}.svg`}
                width={20}
                height={20}
                alt={`${partido.equipoVisitante} crest`}
              />{" "}
              {partido.equipoVisitante}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

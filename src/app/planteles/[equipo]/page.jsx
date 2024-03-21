import style from "../ListadoFantaEquipos.module.css";
import { getFantaJugadores } from "../../lib/querys";
import { AllPlayers } from "./AllPlayers";

export default async function Planteles({ params }) {
  const { equipo } = params;
  const fantaEquipo = equipo.replace(/\+|%20/g, " ").toUpperCase();
  const fantaEscudo = fantaEquipo.toLowerCase();
  const jugadores = await getFantaJugadores({ fantaEquipo });

  return (
    <section className={style.container}>
      <div className={style.fantaContainer}>
        <h1 className="title">{fantaEquipo}</h1>
        <img
          className={style.bigCrest}
          src={`/FantaTeams/${fantaEscudo}.svg`}
          width={100}
          height={100}
          alt="imagen"
        />
      </div>
      <AllPlayers jugadores={jugadores} />
    </section>
  );
}

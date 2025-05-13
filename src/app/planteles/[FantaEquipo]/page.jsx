import { getFantaJugadores } from "../../lib/querys";
import { AllPlayers } from "./AllPlayers";
import { DownloadPlayers } from "../DownloadPlayers";
import BackButton from "@/app/components/BackButton";
import style from "../ListadoFantaEquipos.module.css";


export default async function Planteles({ params }) {
  const { FantaEquipo } = params;
  const fantaEquipo = FantaEquipo.replace(/\+|%20/g, " ").toUpperCase();
  const fantaEscudo = fantaEquipo.toLowerCase();
  const jugadores = await getFantaJugadores({ fantaEquipo });

  return (
    <section className={style.container}>
      <BackButton />
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
      <DownloadPlayers fantaJugadores={jugadores} fantaEquipo={fantaEquipo} />
    </section>
  );
}

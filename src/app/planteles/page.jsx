import style from "./ListadoFantaEquipos.module.css";
import { getFantaEquipos, getAllJugadores } from "../lib/querys";
import { ListaFantaTeams } from "./ListaFantaTeams";
import { DownloadPlayers } from "./DownloadPlayers";

export default async function Planteles() {
  const fantaEquipos = await getFantaEquipos();
  const fantaJugadores = await getAllJugadores();
  
  return (
    <section className={style.container}>
      <h1 className="title">PLANTELES</h1>
      <div className={style.flexTeamContainer}>
        {fantaEquipos.map((fanta, index) => {
          return <ListaFantaTeams key={index} fanta={fanta} />;
        })}
      </div>
      <DownloadPlayers fantaJugadores={fantaJugadores} />
    </section>
  );
}

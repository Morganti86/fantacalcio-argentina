import style from "./ListadoFantaEquipos.module.css";
import { getFantaTeams, getAllPlayers } from "../lib/querys";
import { ListaFantaTeams } from "./ListaFantaTeams";
import { DownloadPlayers } from "./DownloadPlayers";

export default async function Planteles() {
  const fantaTeams = await getFantaTeams();
  const fantaPlayers = await getAllPlayers();
  
  return (
    <section className={style.container}>
      <h1 className="title">PLANTELES</h1>
      <div className={style.flexCenter}>
        {fantaTeams.map((fanta, index) => {
          return <ListaFantaTeams key={index} fanta={fanta} />;
        })}
      </div>
      <DownloadPlayers fantaPlayers={fantaPlayers} />
    </section>
  );
}

import style from "./ListadoFantaEquipos.module.css";
import { getFantaTeams } from "../lib/querys";
import { ListaFantaTeams } from "./ListaFantaTeams";

export default async function Planteles() {
  const fantaTeams = await getFantaTeams();

  return (
    <section className={style.container}>
      <h1 className={style.title}>PLANTELES</h1>
      <div className={style.grid}>
        {fantaTeams.map((fanta, index) => {
          return <ListaFantaTeams key={index} fanta={fanta} />;
        })}
      </div>
    </section>
  );
}

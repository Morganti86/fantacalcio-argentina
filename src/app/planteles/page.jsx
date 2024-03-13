import style from "./ListadoFantaEquipos.module.css";
import { getFantaTeams } from "../lib/querys";
import { ListaFantaTeams } from "./ListaFantaTeams";
import { Lights } from "../components/Lights";

export default async function Planteles() {
  const fantaTeams = await getFantaTeams();

  return (
    <section className={style.container}>
      <h1 className="title">PLANTELES</h1>
      <div className={style.flexCenter}>
        {fantaTeams.map((fanta, index) => {
          return <ListaFantaTeams key={index} fanta={fanta} />;
        })}
      </div>
    </section>
  );
}

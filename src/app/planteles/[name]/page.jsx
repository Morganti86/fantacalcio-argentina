import style from "../ListadoFantaEquipos.module.css";

export default async function Planteles({ params }) {
  const { name } = params;
  const fantaName = name.replace(/\+|%20/g, " ").toUpperCase();

  // const fantaTeams = await getFantaTeams();

  return (
    <section className={style.container}>
      <h1 className={style.title}>{fantaName}</h1>
    </section>
  );
}

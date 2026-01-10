import Link from "next/link";
import style from "./ListadoFantaEquipos.module.css";

export function ListaFantaTeams({ fanta }) {
  const fantaName =  fanta.fanta_equipo.toLowerCase();
  return (
    <section>
      <Link
        key={fantaName}
        href={`/planteles/${fantaName}`}>
        <article className={style.teamContainer}>
          <img
            className={style.crest}
            src={`/FantaTeams/${fantaName}.svg`}
            width={50}
            height={50}
            alt={`${fanta.fanta_equipo} crest`}
          />
          <h2 className={style.president}>{fanta.presidente}</h2>
          <h1 className={style.fantaName}>{fanta.fanta_equipo}</h1>
          <div className={style.budgetContainer}>
            <div>
              Presupuesto: $
              {new Intl.NumberFormat("es-AR").format(fanta.presupuesto)}
            </div>
            <div>
              Remanente: $
              {new Intl.NumberFormat("es-AR").format(fanta.remanente)}
            </div>
          </div>
          <div className={style.campeonatosContainer}>
            {[...Array(fanta.campeonatos)].map((_, index) => (
              <span key={index} className={style.estrellaContainer}>
                <img
                  className={style.estrella}
                  src="/Images/estrella.webp"
                  width={50}
                  height={50}
                  alt="estrella img"
                />
              </span>
            ))}
          </div>
          <div className={style.copasContainer}>
            {[...Array(fanta.copas)].map((_, index) => (
              <span key={index} className={style.copaContainer}>
                <img
                  className={style.copa}
                  src="/Images/copa.webp"
                  width={50}
                  height={50}
                  alt="copa img"
                />
              </span>
            ))}
          </div>
          <div className={style.nextContainer}>
            <img className={style.next} src="/Icons/next.svg" width={25} height={25} alt="next img" />
          </div>
        </article>
      </Link>
    </section>
  );
}

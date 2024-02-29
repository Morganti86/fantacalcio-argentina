import Link from "next/link";
import style from "./ListadoFantaEquipos.module.css";
import Image from "next/image";

export function SingleFantaTeam({ fanta }) {
  const fantaName = fanta.name.toLowerCase();
  return (
    <section>
      <Link
        key={fantaName}
        href="/planteles/[name]"
        as={`planteles/${fantaName}`}>
        <article className={style.teamContainer}>
          <h1 className={style.fantaName}>{fanta.name}</h1>
          <Image
            className={style.crest}
            src={`/FantaTeams/${fantaName}.svg`}
            width={50}
            height={50}
            alt={`${fanta.name} crest`}
          />
          <h2 className={style.president}>{fanta.president}</h2>
          <div className={style.budgetContainer}>
            <div>Presupuesto: ${fanta.budget}</div>
            <div>Remanente: ${fanta.remaining}</div>
          </div>
        </article>
      </Link>
    </section>
  );
}

import style from "../ListadoFantaEquipos.module.css";
import { getFantaPlayers } from "../../lib/querys";
import { AllPlayers } from "./AllPlayers";
import Image from "next/image";

export default async function Planteles({ params }) {
  const { name } = params;
  const fantaName = name.replace(/\+|%20/g, " ").toUpperCase();
  const fantaCrest = fantaName.toLowerCase();
  const players = await getFantaPlayers({ fantaName });

  return (
    <section className={style.container}>
      <div className={style.fantaContainer}>
        <h1 className="title">{fantaName}</h1>
        <img
          className={style.bigCrest}
          src={`/FantaTeams/${fantaCrest}.svg`}
          width={100}
          height={100}
          alt="imagen"
        />
      </div>
      <AllPlayers players={players} />
    </section>
  );
}

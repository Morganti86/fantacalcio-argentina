import style from "../ListadoFantaEquipos.module.css";
import { getFantaPlayers } from "../../lib/querys";
import { AllPlayers } from "./AllPlayers";
import Image from "next/image";

export default async function Planteles({ params }) {
  const { name } = params;
  const fantaName = name.replace(/\+|%20/g, " ").toUpperCase();
  const fantaCrest = fantaName.toLowerCase();
  const players = await getFantaPlayers({ fantaName });

  // const ARQ = players.filter((player) => player.position === "ARQ");
  // const DEF = players.filter((player) => player.position === "DEF");
  // const VOL = players.filter((player) => player.position === "VOL");
  // const DEL = players.filter((player) => player.position === "DEL");

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
      {/* <PositionPlayers title="ARQUEROS" players={ARQ} />
      <PositionPlayers title="DEFENSORES" players={DEF} />
      <PositionPlayers title="VOLANTES" players={VOL} />
      <PositionPlayers title="DELANTEROS" players={DEL} /> */}
    </section>
  );
}

import style from "../ListadoFantaEquipos.module.css";
import { getFantaPlayers } from "../../lib/querys";
import { PositionPlayers } from "./PositionPlayers";
import Image from "next/image";

export default async function Planteles({ params }) {
  const { name } = params;
  const fantaName = name.replace(/\+|%20/g, " ").toUpperCase();
  const fantaCrest = fantaName.toLowerCase();
  const players = await getFantaPlayers({ fantaName });

  const ARQ = players.filter((player) => player.position === "ARQ");
  const DEF = players.filter((player) => player.position === "DEF");
  const VOL = players.filter((player) => player.position === "VOL");
  const DEL = players.filter((player) => player.position === "DEL");
  // const fantaTeams = await getFantaTeams();

  return (
    <section className={style.container}>
      <Image
        className={style.bigCrest}
        src={`/FantaTeams/${fantaCrest}.svg`}
        width={100}
        height={100}
        alt="imagen"
      />
      <h1 className="title">{fantaName}</h1>

      {/* Utilizamos el componente PositionPlayers para cada posición */}
      <PositionPlayers title="ARQUEROS" players={ARQ} />
      <PositionPlayers title="DEFENSORES" players={DEF} />
      <PositionPlayers title="VOLANTES" players={VOL} />
      <PositionPlayers title="DELANTEROS" players={DEL} />
    </section>
  );
}

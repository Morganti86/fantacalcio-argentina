import style from "../ListadoFantaEquipos.module.css";
import { SinglePlayer } from "./SinglePlayer";

export function PositionPlayers({ title, players }) {
  return (
    <section>
      <h2 className="subTitle">{title}</h2>
      <div className={style.flexCenter}>
        {players.map((player) => (
          <SinglePlayer key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
}

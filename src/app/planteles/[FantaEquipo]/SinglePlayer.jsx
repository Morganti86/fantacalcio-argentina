import style from "./SinglePlayer.module.css";

export function SinglePlayer(props) { 
  const { jugador } = props;
  
  const playerImage = jugador.imagen ? jugador.imagen : "/notfound.webp";
  let background;
  let color = "ivory";

  if (jugador.precio_base <= 200) {
    background = `url("/Backgrounds/normal.webp")`;
  } else if (jugador.precio_base > 200 && jugador.precio_base < 600) {
    background = `url("/Backgrounds/elite.webp")`;
  } else {
    background = `url("/Backgrounds/top.webp")`;
    color = "black";
  }
  return (
    <article
      className={style.playerContainer}
      style={{ backgroundImage: background, color: color, fontWeight: "600" }}>
      <img
        className={style.imagePlayer}
        src={playerImage}
        width={100}
        height={100}
        alt={`${jugador.jugador} image`}
      />
      <span className={style.positionPlayer}>{jugador.posicion}</span>
      {jugador.poli ? <span className={style.poliPlayer}>℗</span> : ""}
      {jugador.precio_compra ? (
        <span className={style.boughtPricePlayer}>
          ${jugador.precio_compra}
        </span>
      ) : (
        <span className={style.boughtPricePlayer}>${jugador.precio_base}</span>
      )}
      <h3 className={style.namePlayer}>{jugador.jugador}</h3>
      <img
        className={style.imageTeam}
        src={`/LeagueTeams/${jugador.equipo}.webp`}
        width={25}
        height={25}
        alt={`${jugador.equipo} image`}
      />
    </article>
  );
}

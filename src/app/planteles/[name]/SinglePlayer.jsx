import Image from "next/image";
import style from "./SinglePlayer.module.css";

export function SinglePlayer(props) {
  const { player } = props;
  const playerImage = player.image ? player.image : "/notfound.webp";
  let background;
  let color = "ivory";

  if (player.baseprice <= 200) {
    background = `url("/Backgrounds/normal.webp")`;
  } else if (player.baseprice > 200 && player.baseprice < 600) {
    background = `url("/Backgrounds/elite.webp")`;
  } else {
    background = `url("/Backgrounds/top.webp")`;
    color = "black";
  }
  return (
    <article
      className={style.playerContainer}
      style={{ backgroundImage: background, color: color, fontWeight: "700" }}>
      <img
        className={style.imagePlayer}
        src={playerImage}
        width={100}
        height={100}
        alt={`${player.player} image`}
      />
      <span className={style.positionPlayer}>{player.position}</span>
      {player.poli ? <span className={style.poliPlayer}>℗</span> : ""}
      {player.boughtprice ? (
        <span className={style.boughtPricePlayer}>${player.boughtprice}</span>
      ) : (
        ""
      )}
      <h3 className={style.namePlayer}>{player.player}</h3>
      <img
        className={style.imageTeam}
        src={`/LeagueTeams/${player.team}.webp`}
        width={25}
        height={25}
        alt={`${player.team} image`}
      />
    </article>
  );
}

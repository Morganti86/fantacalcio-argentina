import Image from "next/image";
import style from "./SinglePlayer.module.css";

export function SinglePlayer(props) {
  const { player } = props;
  const playerImage = player.image ? player.image : "/notfound.webp";
  let background;
  // let color = "ivory";
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
      style={{ backgroundImage: background }}>
      <img
        className={style.imagePlayer}
        src={playerImage}
        width={100}
        height={100}
        alt={`${player.player} image`}
      />
      <h3 className={style.namePlayer} style={{ color: color }}>
        {player.player}
      </h3>
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

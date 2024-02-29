import Image from "next/image";

export function SinglePlayer(props) {
  const { player } = props;
  const image = player.image ? player.image : "/notfound.webp"
  return (
    <article>
      <Image
        src={image}
        // src="https://cdn.fifacm.com/content/media/imgs/fc24/players/p227903.png?v=22"
        width={180}
        height={180}
        alt={`${player.player} image`}
      />
      <h3>{player.player}</h3>
      {/* <span>{player.poli}</span> */}
    </article>
  );
}

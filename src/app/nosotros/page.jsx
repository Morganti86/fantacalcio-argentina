import { PICTURES } from "./PicturesList";
import ArtSingle from "./ArtSingle";
import BackButton from "../components/BackButton";
import style from "./Nosotros.module.css";

export default function Nosotros() {
  const imageChunks = [];
  for (let i = 0; i < PICTURES.length; i += 3) {
    imageChunks.push(PICTURES.slice(i, i + 3));
  }

  return (
    <section className={style.container}>
      <BackButton />
      <h1 className="title">NOSOTROS</h1>
      <div className={style.imagesContainer}>
        {imageChunks.map((chunk, index) => (
          <ArtSingle key={index} images={chunk} />
        ))}
      </div>
    </section>
  );
}

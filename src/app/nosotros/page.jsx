import ArtSingle from "./ArtSingle";
import style from "./Nosotros.module.css";
import { PICTURES } from "./PicturesList";

export default function Nosotros() {
  const imageChunks = [];
  for (let i = 0; i < PICTURES.length; i += 2) {
    imageChunks.push(PICTURES.slice(i, i + 2));
  }

  return (
    <section className={style.container}>
      <h1 className="title">Nosotros</h1>
      {/* <div className='artwork-grid flex-row'> */}
      <div className={style.imagesContainer}>
        {imageChunks.map((chunk, index) => (
          <ArtSingle key={index} images={chunk} />
        ))}
      </div>
    </section>
  );
}
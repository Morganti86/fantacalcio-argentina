import React from "react";
import style from "./Subasta.module.css";

export const SubastaPosiciones = ({ posiciones }) => {
  return (
    <section className={style.boxPosiciones}>
      <div className={style.flex}>
        {posiciones.map((posicion) => (
          <div
            className={style.position}
            key={posicion.index}
            style={{ opacity: posicion.pendiente == true ? 1 : 0.3 }}>
            <img
              className={style.positionImage}
              src={`/Positions/${posicion.posicion}.webp`}
              width={50}
              height={50}
              alt={`${posicion.posicion} image`}
            />
            <span className={style.positionText}>{posicion.posicion}</span>
          </div>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>SORTEAR</button>
      </div>
    </section>
  );
};

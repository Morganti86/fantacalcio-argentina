import React from "react";
import style from "./Subasta.module.css";

export const SubastaPosiciones = ({ posiciones, nextPosition }) => {
  const posicionNombres = {
    ARQ: "ARQUEROS",
    DEF: "DEFENSORES",
    MED: "MEDIOCAMPISTAS",
    DEL: "DELANTEROS",
  };

  const posicionValida = posiciones !== null ? posiciones.posicion : null;
  const nombrePosicion = posicionValida
    ? posicionNombres[posicionValida]
    : null;

  return (
    <section className={style.boxPosiciones}>
      <div className={style.flex}>
        {posicionValida ? (
          <section>
            <div className={style.position}>
              <img
                className={style.positionImage}
                src={`/Positions/${posiciones.posicion}.webp`}
                width={50}
                height={50}
                alt={`${posiciones.posicion} image`}
              />
              <span className={style.positionText}>{nombrePosicion}</span>
            </div>
          </section>
        ) : (
          <div className={style.position}>
            <span className="title">FIN</span>
          </div>
        )}
      </div>
      {posicionValida && (
        <div className={style.buttonContainer}>
          <button className={style.button} onClick={nextPosition}>
            CONTINUAR
          </button>
        </div>
      )}
    </section>
  );
};

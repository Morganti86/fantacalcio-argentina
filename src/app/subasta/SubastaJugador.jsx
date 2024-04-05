import React from "react";
import style from "./Subasta.module.css";
import { SinglePlayer } from "../planteles/[FantaEquipo]/SinglePlayer";

export const SubastaJugador = ({
  jugadorActual,
  jugadores,
  compradorActual,
  fantaEquipos,
  precioActual,
  priceAction,
  buyerAction,
  nextAction,
}) => {
  return (
    <div className={style.boxSubasta}>
      {jugadores.length > 0 && (
        <div className={style.boxJugador}>
          <div className={`${style.flex} ${style.singlePlayer}`}>
            <SinglePlayer jugador={jugadores[jugadorActual]} />
          </div>
          <div className={style.label}>
            <label>COMPRADOR: </label>
            <select
              value={compradorActual}
              onChange={(e) => buyerAction(e.target.value)}
              className={style.fantaEquipo}>
              <option value=""></option>
              {fantaEquipos.map((equipo) => (
                <option key={equipo.fanta_equipo} value={equipo.fanta_equipo}>
                  {equipo.fanta_equipo}
                </option>
              ))}
            </select>
          </div>
          <div className={style.label}>
            {/* Separador de miles */}
            PRECIO: ${new Intl.NumberFormat("es-AR").format(precioActual)}
          </div>
          <div className={style.flex}>
            <button
              className={`${style.buyButton} ${style.bc1}`}
              onClick={() => priceAction(-100)}>
              -100
            </button>
            <button
              className={`${style.buyButton} ${style.bc2}`}
              onClick={() => priceAction(100)}>
              +100
            </button>
            <button
              className={`${style.buyButton} ${style.bc3}`}
              onClick={() => priceAction(200)}>
              +200
            </button>
            <button
              className={`${style.buyButton} ${style.bc4}`}
              onClick={() => priceAction(500)}>
              +500
            </button>
          </div>
          <div className={style.flex}>
            <button className={style.nextButton} onClick={nextAction}>
              SIGUIENTE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

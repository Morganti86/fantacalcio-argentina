"use client";
import { useEffect, useState } from "react";
import style from "./Subasta.module.css";
import { SinglePlayer } from "../planteles/[FantaEquipo]/SinglePlayer";

export default function Subasta() {
  const [posiciones, setPosiciones] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [fantaEquipos, setFantaEquipos] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [jugadorActual, setJugadorActual] = useState(0);
  const [precioActual, setPrecioActual] = useState("");
  const [compradorActual, setCompradorActual] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posiciones
        const posicionesResponse = await fetch("/api/getPosiciones");
        if (!posicionesResponse.ok) {
          throw new Error("Failed to fetch posiciones data");
        }
        const posicionesData = await posicionesResponse.json();
        setPosiciones(posicionesData);

        // Fetch equipos
        const equiposResponse = await fetch("/api/getEquipos");
        if (!equiposResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const equiposData = await equiposResponse.json();
        setEquipos(equiposData);

        // Fetch FantaEquipos
        const fantaEquiposResponse = await fetch("/api/getFantaEquipos");
        if (!equiposResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const fantaEquiposData = await fantaEquiposResponse.json();
        setFantaEquipos(fantaEquiposData);

        // Fetch Jugadores
        const jugadoresResponse = await fetch("/api/getJugadores");
        if (!jugadoresResponse.ok) {
          throw new Error("Failed to fetch equipos data");
        }
        const jugadoresData = await jugadoresResponse.json();
        setJugadores(jugadoresData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const nextAction = () => {
    // Si hay más jugadores por mostrar, incrementa el índice
    if (jugadorActual < jugadores.length - 1) {
      setJugadorActual(jugadorActual + 1);
      setPrecioActual(jugadores[jugadorActual + 1].precio_base);
      setCompradorActual(null);
    }
  };

  const priceAction = (value) => {
    // Calculamos el nuevo precio sumando el valor al precio actual
    const newPrice = Number(precioActual) + value;
    // Verificamos si el nuevo precio es menor que el precio base del jugador
    if (newPrice < jugadores[jugadorActual].precio_base) {
      // Si es menor, establecemos el precio base como el nuevo precio
      setPrecioActual(jugadores[jugadorActual].precio_base);
    } else {
      // Si no es menor, establecemos el nuevo precio calculado
      setPrecioActual(newPrice);
    }
  };

  const buyerAction = (value) => {
    setCompradorActual(value);
  };

  return (
    <section className={style.container}>
      <h1 className="title">SUBASTA</h1>
      <div className={style.flex}>
        {equipos.map((equipo) => (
          <div key={equipo.id}>
            <img
              className={style.imageTeam}
              src={`/LeagueTeams/${equipo.equipo}.webp`}
              width={43}
              height={43}
              alt={`${equipo.equipo} image`}
            />
          </div>
        ))}
      </div>
      {/* {posiciones.map((posicion) => (
        <div key={posicion.index}>{posicion.posicion}</div>
      ))} */}
      <div className={style.boxSubasta}>
        {jugadores.length > 0 && (
          <section className={style.grid}>
            <div className={style.boxJugador}>
              <SinglePlayer jugador={jugadores[jugadorActual]} />
              <div className={style.label}>COMPRADOR: {compradorActual}</div>
              <div className={style.label}>PRECIO: ${precioActual}</div>
              {/* <div className={style.flex}> */}
              <button
                className={style.buyButton}
                onClick={() => priceAction(-100)}>
                -100
              </button>
              <button
                className={style.buyButton}
                onClick={() => priceAction(100)}>
                +100
              </button>
              <button
                className={style.buyButton}
                onClick={() => priceAction(200)}>
                +200
              </button>
              <button
                className={style.buyButton}
                onClick={() => priceAction(500)}>
                +500
              </button>
              {/* </div> */}
              <div className={style.nextButton}>
                <button onClick={nextAction}>SIGUIENTE</button>
              </div>
            </div>
            <ul>
              {fantaEquipos.map((equipo) => (
                <li className={style.fantaEquipo}>
                  <span
                    key={equipo.fanta_equipo}
                    onClick={() => buyerAction(equipo.fanta_equipo)}>
                    {equipo.fanta_equipo}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </section>
  );
}

{
  /* <div>
        {jugadores.map((jugador) => {
          return <SinglePlayer key={jugador.id} jugador={jugador} />;
        })}
      </div> */
}

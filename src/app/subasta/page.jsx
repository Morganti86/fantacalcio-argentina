"use client";
import { useEffect, useState } from "react";
import style from "./Subasta.module.css";
import { SinglePlayer } from "../planteles/[FantaEquipo]/SinglePlayer";
import { Login } from "./Login";

export default function Subasta() {
  const [credencialesUser, setCredencialesUser] = useState(""); // Estado para el usuario
  const [credencialesPass, setCredencialesPass] = useState(""); // Estado para el pass
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
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
        // Fetch credenciales
        const credencialesResponse = await fetch("/api/getCredenciales");
        if (!credencialesResponse.ok) {
          throw new Error("Failed to fetch credenciales data");
        }
        const credencialesData = await credencialesResponse.json();
        setCredencialesUser(credencialesData.user);
        setCredencialesPass(credencialesData.pass);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para verificar la contraseña
    if (usuario === credencialesUser && contraseña === credencialesPass) {
      setContraseña(true);
    } else {
      alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }
  };

  const handleChangeUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleChangeContraseña = (event) => {
    setContraseña(event.target.value);
  };

  const nextAction = () => {
    // Si hay más jugadores por mostrar, incrementa el índice
    if (jugadorActual < jugadores.length - 1) {
      setCompradorActual(""); // Establecer compradorActual en null antes de incrementar jugadorActual
      setJugadorActual(jugadorActual + 1);
      setPrecioActual(jugadores[jugadorActual + 1].precio_base);
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
      {contraseña != true && (
        <div className={style.boxContraseña}>
          <Login
            onSubmit={handleSubmit}
            onChangeUsuario={handleChangeUsuario}
            onChangeContraseña={handleChangeContraseña}
            usuario={usuario}
            contraseña={contraseña}
          />
        </div>
      )}
      {contraseña === true && (
        <section>
          <div className={style.flex}>
            {equipos.map((equipo) => (
              <div
                key={equipo.id}
                style={{ opacity: equipo.estado == false ? 1 : 0.3 }}>
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
                      <option
                        key={equipo.fanta_equipo}
                        value={equipo.fanta_equipo}>
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
        </section>
      )}
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

{
  /* <ul>
              {fantaEquipos.map((equipo) => (
                <li className={style.fantaEquipo}>
                  <span
                    key={equipo.fanta_equipo}
                    onClick={() => buyerAction(equipo.fanta_equipo)}>
                    {equipo.fanta_equipo}
                  </span>
                  <img
                    className={style.crest}
                    src={`/FantaTeams/${equipo.fanta_equipo.toLowerCase()}.svg`}
                    width={22}
                    height={22}
                    alt={`${equipo.fanta_equipo} crest`}
                  />
                </li>
              ))}
            </ul> */
}

{
  /* <div className={style.flex}>
        {posiciones.map((posicion) => (
          <div
            key={posicion.index}
            style={{ opacity: posicion.estado == false ? 1 : 0.3 }}>
            <img
              className={style.positionImage}
              src={`/Positions/${posicion.posicion}.webp`}
              width={50}
              height={50}
              alt={`${posicion.posicion} image`}
            />
            <span>{posicion.posicion}</span>
          </div>
        ))}
      </div> */
}

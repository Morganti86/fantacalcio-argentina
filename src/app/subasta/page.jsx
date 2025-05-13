"use client";
import { useEffect, useState } from "react";
import { SubastaLogin } from "./SubastaLogin";
import { SubastaJugador } from "./SubastaJugador";
import { SubastaEquipo } from "./SubastaEquipos";
import { SubastaPosiciones } from "./SubastaPosiciones";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "../components/BackButton";
import style from "./Subasta.module.css";



export default function Subasta() {
  const [credencialesUser, setCredencialesUser] = useState(""); // Estado para el usuario
  const [credencialesPass, setCredencialesPass] = useState(""); // Estado para el pass
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [posiciones, setPosiciones] = useState([]);
  const [posicionActual, setPosicionActual] = useState("");

  const [equipos, setEquipos] = useState([]);
  const [equipoActual, setEquipoActual] = useState("");

  const [fantaEquipos, setFantaEquipos] = useState([]);
  const [compradorActual, setCompradorActual] = useState({
    fanta_equipo: "",
    presupuesto: 0,
    remanente: 0,
  });

  const [precioActual, setPrecioActual] = useState("");

  const [jugadores, setJugadores] = useState([]);
  const [jugadoresFiltrados, setJugadoresFiltrados] = useState([]);
  const [jugadorActual, setJugadorActual] = useState(0);

  const [mostrarPosiciones, setmostrarPosiciones] = useState(true);

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

        const posicionActivaIndex = posicionesData.findIndex(
          (posicion) => posicion.activo
        );

        // Separo posicion activa del resto
        const posicionActual = posicionesData.splice(posicionActivaIndex, 1)[0];

        // Función de comparación que devuelve un número aleatorio entre 0 y 1
        const compararAleatorio = () => Math.random() - 0.5;
        // Ordenar aleatoriamente el resto de los elementos
        posicionesData.sort(compararAleatorio);
        // Insertar el elemento con activo: true al principio
        posicionesData.unshift(posicionActual);
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
        if (!fantaEquiposResponse.ok) {
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

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica para verificar la contraseña
    if (usuario === credencialesUser && contraseña === credencialesPass) {
      setContraseña(true);
      setPosicionActual(posiciones[0]);
    } else {
      // alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
      toast.error("Contraseña incorrecta! Por favor, inténtalo de nuevo.", {
        position: "bottom-left",
      });
    }
  };

  const handleChangeUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleChangeContraseña = (event) => {
    setContraseña(event.target.value);
  };

  const nextPosition = () => {
    // Sorteo de equipos
    const EQUIPOS = [...equipos].filter((equipo) => equipo.pendiente === true);
    const indiceEquipoActivo = EQUIPOS.findIndex((equipo) => equipo.activo);
    let equipoActivo;
    if (indiceEquipoActivo !== -1) {
      // Separo posicion activa del resto
      equipoActivo = EQUIPOS.splice(indiceEquipoActivo, 1)[0];
      // Función de comparación que devuelve un número aleatorio entre 0 y 1
    } else {
      equipoActivo = null; // No hay equipo activo
    }

    const Aleatorio = () => Math.random() - 0.5;
    // Ordenar aleatoriamente el resto de los elementos
    EQUIPOS.sort(Aleatorio);

    if (equipoActivo) {
      // Insertar el elemento con activo: true al principio
      EQUIPOS.unshift(equipoActivo);
    }

    const jugadoresOrdenados = [];

    EQUIPOS.forEach((equipoSorteado) => {
      const jugadoresEquipo = jugadores.filter(
        (jugador) =>
          jugador.posicion === posicionActual.posicion &&
          jugador.equipo === equipoSorteado.equipo
      );
      jugadoresOrdenados.push(...jugadoresEquipo);
    });

    // Actualizar el estado de jugadoresOrdenados
    setJugadoresFiltrados(jugadoresOrdenados);
    setPrecioActual(jugadoresOrdenados[0].precio_base);
    setEquipoActual(jugadoresOrdenados[0].equipo);
    setmostrarPosiciones(false);
  };

  const previousAction = () => {
    // Nos paramos en el jugador anterior
    setJugadorActual(jugadorActual - 1);
    setPrecioActual(jugadoresFiltrados[jugadorActual - 1].precio_base);
    setCompradorActual({
      fanta_equipo: "",
      presupuesto: 0,
      remanente: 0,
    });
  };

  const nextAction = () => {
    // Verificar si hay un comprador seleccionado y si tiene presupuesto suficiente
    if (
      compradorActual.fanta_equipo !== "" &&
      compradorActual.remanente < precioActual
    ) {
      toast.error(
        `${compradorActual.fanta_equipo} no cuenta con presupuesto suficiente!`,
        {
          position: "bottom-left",
        }
      );
    } else {
      if (compradorActual.fanta_equipo !== "") {
        // Si hay un comprador seleccionado, guardar el jugador actual en la base de datos
        updateJugadores(
          jugadoresFiltrados[jugadorActual],
          compradorActual,
          precioActual
        );
        // actualizamos el remanente en el state y la base de datos
        updateFantaEquipo(compradorActual, precioActual);
        // Limpiamos el comprobadorActual para el siguiente jugador.
        setCompradorActual({
          fanta_equipo: "",
          presupuesto: 0,
          remanente: 0,
        });
      }
      // Actualizamos el equipo actual
      let equipoAnt = equipoActual;
      let equipoAct = jugadoresFiltrados[jugadorActual + 1]?.equipo || null;
      if (equipoAct !== equipoAnt || jugadorActual === 0) {
        //El primero de la lista
        if (jugadorActual === 0) {
          equipoAnt = null;
        }
        try {
          updateEquipos(equipoAct, equipoAnt); // Actualizar en la base de datos
        } catch (error) {
          console.error("Error updating equipos:", error);
        }
        // Actualizar el estado de los equipos
        let equiposActualizados = equipos.map((equipo) => {
          if (equipo.equipo === equipoAct) {
            return {
              ...equipo,
              pendiente: true,
              activo: true,
            };
          } else if (equipoAnt !== null && equipo.equipo === equipoAnt) {
            return {
              ...equipo,
              pendiente: false,
              activo: false,
            };
          } else {
            return {
              ...equipo,
            };
          }
        });
        setEquipos(equiposActualizados); // Actualizar el estado con los equipos modificados
        setEquipoActual(equipoAct);
      }

      if (jugadorActual < jugadoresFiltrados.length - 1) {
        // Si hay más jugadores por mostrar, incrementar el índice del jugador actual
        setJugadorActual(jugadorActual + 1);
        setPrecioActual(jugadoresFiltrados[jugadorActual + 1].precio_base);
      } else {
        // Si no hay más jugadores en la posición actual, avanzar a la siguiente posición
        const currentIndex = posiciones.findIndex(
          (posicion) => posicion === posicionActual
        );
        const nextIndex = currentIndex + 1;
        let posAnt = null;
        let posAct = null;
        if (nextIndex < posiciones.length) {
          setPosicionActual(posiciones[nextIndex]);
          setJugadorActual(0);
          setPrecioActual(jugadoresFiltrados[0].precio_base);
          posAnt = posiciones[currentIndex].posicion;
          posAct = posiciones[nextIndex].posicion;
        } else {
          setPosicionActual(null);
        }
        // Actualizamos posiciones en DB (pendientes y actual)
        updateEquipos(null, null); // Actualizar todos los equipos en la base de datos
        // Reiniciamos el estado de todos los equipos
        const equiposActualizados = equipos.map((equipo) => ({
          ...equipo,
          pendiente: true,
          activo: false,
        }));
        setEquipos(equiposActualizados);
        updatePosiciones(posAnt, posAct);
        setmostrarPosiciones(true);
      }
    }
  };

  const updateJugadores = async (jugador, compradorActual, precioActual) => {
    try {
      const response = await fetch("/api/putJugadores", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: jugador.id,
          compradorActual: compradorActual.fanta_equipo,
          precioActual: precioActual,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update player");
      }
      const data = await response.json();
      toast.success(
        `${jugador.jugador} adquirido por ${compradorActual.fanta_equipo}!`,
        {
          position: "bottom-left",
        }
      );
    } catch (error) {
      console.error("Error updating player:", error);
      toast.error(`Error al actualizar ${jugador.jugador}`, {
        position: "bottom-left",
      });
    }
  };

  const updateFantaEquipo = async (compradorActual, precioActual) => {
    try {
      const response = await fetch("/api/putFantaEquipos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fantaEquipo: compradorActual.fanta_equipo,
          remanenteActualizado: compradorActual.remanente - precioActual,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update fanta equipos");
      }
      // Actualizar el estado de fantaEquipos en el cliente
      const updatedFantaEquipos = fantaEquipos.map((equipo) => {
        if (equipo.fanta_equipo === compradorActual.fanta_equipo) {
          return {
            ...equipo,
            remanente: compradorActual.remanente - precioActual,
          };
        }
        return equipo;
      });
      setFantaEquipos(updatedFantaEquipos);
    } catch (error) {
      console.error("Error updating fanta_equipo:", error);
      toast.error(`Error al actualizar el ${compradorActual.fanta_equipo}`, {
        position: "bottom-left",
      });
    }
  };

  const handleRetrieveInfo = async () => {
    const JugadorRetrieve = jugadoresFiltrados[jugadorActual].id;
    console.log(`Jugador: ${JugadorRetrieve}`);

    try {
      const response = await fetch("/api/putJugadorRetrieve", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: JugadorRetrieve,
        }),
      });

      // Procesar la respuesta si es exitosa
      if (response.ok && response.status === 200) {
        const data = await response.json(); // Obtener los datos de la respuesta
        // Mostrar el toast solo si hubo una modificación
        toast.success(`${data.monto} reintegrados a ${data.equipo}`, {
          position: "bottom-left",
        });
      } else if (response.status === 204) {
        // Si no hubo actualización, no hacer nada
        return;
      } else {
        throw new Error("Failed to update player");
      }
    } catch (error) {
      console.error("Error updating player:", error);
      toast.error(`Error al actualizar ${jugador.jugador}`, {
        position: "bottom-left",
      });
    }
  };


  const updatePosiciones = async (posAnt, posAct) => {
    try {
      const response = await fetch("/api/putPosiciones", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posicionAnt: posAnt,
          posicionAct: posAct,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update posiciones");
      }
    } catch (error) {
      console.error("Error updating posiciones:", error);
    }
  };

  const updateEquipos = async (equipoAct, equipoAnt) => {
    try {
      const response = await fetch("/api/putEquipos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          equipoAct: equipoAct,
          equipoAnt: equipoAnt,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update equipos");
      }
    } catch (error) {
      console.error("Error updating equipos:", error);
    }
  };

  const priceAction = (value) => {
    // Calculamos el nuevo precio sumando el valor al precio actual
    const newPrice = Number(precioActual) + value;
    const precioBase = jugadoresFiltrados[jugadorActual].precio_base;

    // Verificamos si el nuevo precio es menor que el precio base del jugador
    if (newPrice < precioBase) {
      // Si es menor, establecemos el precio base como el nuevo precio
      setPrecioActual(precioBase);
    } else {
      // Si no es menor, establecemos el nuevo precio calculado
      setPrecioActual(newPrice);
    }
  };

  // const buyerAction = (value) => {
  //   setCompradorActual(value);
  // };

  const buyerAction = (value) => {
    const equipoSeleccionado = fantaEquipos.find(
      (equipo) => equipo.fanta_equipo === value
    );

    if (equipoSeleccionado) {
      setCompradorActual({
        fanta_equipo: value,
        presupuesto: equipoSeleccionado.presupuesto,
        remanente: equipoSeleccionado.remanente,
      });
    } else {
      setCompradorActual({
        fanta_equipo: "",
        presupuesto: 0,
        remanente: 0,
      });
    }
  };

  return (
    <section className={style.container}>
      <BackButton />
      <h1 className="title">SUBASTA</h1>
      {/* LOGIN */}
      {contraseña !== true && (
        <div className={style.boxLogin}>
          <SubastaLogin
            onSubmit={handleLogin}
            onChangeUsuario={handleChangeUsuario}
            onChangeContraseña={handleChangeContraseña}
            usuario={usuario}
            contraseña={contraseña}
          />
        </div>
      )}
      {/* SUBASTA */}
      {contraseña === true && (
        <section>
          {mostrarPosiciones ? (
            <section>
              <SubastaPosiciones
                posiciones={posicionActual}
                nextPosition={nextPosition}
              />
            </section>
          ) : (
            <section className={style.boxSubasta}>
              <SubastaEquipo
                equipos={equipos}
                jugadorActual={jugadorActual}
                jugadores={jugadoresFiltrados}
              />
              <div className={style.teamTextContainer}>
                {/* Utilizamos Array.fill() para crear un array con un número específico de elementos */}
                {Array(40)
                  .fill(jugadoresFiltrados[jugadorActual].equipo)
                  .map((equipo, index) => (
                    <span className={style.teamText} key={index}>
                      {equipo}
                    </span>
                  ))}
              </div>
              <SubastaJugador
                jugadorActual={jugadorActual}
                jugadores={jugadoresFiltrados}
                compradorActual={compradorActual}
                fantaEquipos={fantaEquipos}
                precioActual={precioActual}
                priceAction={priceAction}
                buyerAction={buyerAction}
                nextAction={nextAction}
                previousAction={previousAction}
                handleRetrieveInfo={handleRetrieveInfo}
              />
            </section>
          )}
        </section>
      )}
      <ToastContainer />
    </section>
  );
}

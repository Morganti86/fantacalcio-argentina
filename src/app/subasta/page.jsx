"use client";
import { useEffect, useState } from "react";
import style from "./Subasta.module.css";
import { SubastaLogin } from "./SubastaLogin";
import { SubastaJugador } from "./SubastaJugador";
import { SubastaEquipo } from "./SubastaEquipos";
import { SubastaPosiciones } from "./SubastaPosiciones";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subasta() {
  const [credencialesUser, setCredencialesUser] = useState(""); // Estado para el usuario
  const [credencialesPass, setCredencialesPass] = useState(""); // Estado para el pass
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [posiciones, setPosiciones] = useState([]);
  const [posicionActual, setPosicionActual] = useState("");

  const [equipos, setEquipos] = useState([]);
  // const [equiposSorteados, setEquiposSorteados] = useState([]);
  // const [equipoActual, setEquipoActual] = useState("");

  const [fantaEquipos, setFantaEquipos] = useState([]);

  // const [compradorActual, setCompradorActual] = useState("");
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
    const EQUIPOS = [...equipos];
    const Aleatorio = () => Math.random() - 0.5;
    EQUIPOS.sort(Aleatorio);

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
    setmostrarPosiciones(false);
  };

  const nextAction = () => {
    console.log(
      "log: ",
      jugadoresFiltrados[jugadorActual],
      compradorActual.fanta_equipo,
      compradorActual.presupuesto,
      compradorActual.remanente,
      precioActual
    );

    if (
      compradorActual.fanta_equipo !== "" &&
      compradorActual.remanente < precioActual
    ) {
      // alert("no puede comprar al jugador");
      toast.error("Presupuesto insuficiente!", {
        position: "bottom-left",
      });
    }
    // Si hay más jugadores por mostrar, incrementa el índice
    else if (jugadorActual < jugadoresFiltrados.length - 1) {
      setCompradorActual({
        fanta_equipo: "",
        presupuesto: 0,
        remanente: 0,
      }); // Establecer compradorActual en null antes de incrementar jugadorActual
      setJugadorActual(jugadorActual + 1);
      setPrecioActual(jugadoresFiltrados[jugadorActual + 1].precio_base);
    } else {
      const currentIndex = posiciones.findIndex(
        (posicion) => posicion === posicionActual
      );

      // Calcula el índice de la siguiente posición
      const nextIndex = currentIndex + 1;
      if (nextIndex < posiciones.length) {
        // Establece la siguiente posición como posición actual
        setPosicionActual(posiciones[nextIndex]);
        // Reinicia el índice del jugador actual al primero de la nueva posición
        setJugadorActual(0);
        // Actualiza el precio actual con el precio base del primer jugador de la nueva posición
        setPrecioActual(jugadoresFiltrados[0].precio_base);
      } else {
        setPosicionActual(null);
      }
      // Muestra las posiciones
      setmostrarPosiciones(true);
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
      // Otras acciones necesarias
    } else {
      setCompradorActual({
        fanta_equipo: "",
        presupuesto: 0,
        remanente: 0,
      })
    }
  };

  return (
    <section className={style.container}>
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
            <section>
              <SubastaEquipo
                equipos={equipos}
                jugadorActual={jugadorActual}
                jugadores={jugadoresFiltrados}
              />
              <SubastaJugador
                jugadorActual={jugadorActual}
                jugadores={jugadoresFiltrados}
                compradorActual={compradorActual}
                fantaEquipos={fantaEquipos}
                precioActual={precioActual}
                priceAction={priceAction}
                buyerAction={buyerAction}
                nextAction={nextAction}
              />
            </section>
          )}
        </section>
      )}
      <ToastContainer />
    </section>
  );
}

"use client";
import { useState } from "react";
import { SinglePlayer } from "../planteles/[FantaEquipo]/SinglePlayer";
import style from "./Subasta.module.css";

export default function Subasta() {
  const [player, setPlayer] = useState("");
  const [equipo, setEquipo] = useState("Talleres");
  const [posicion, setPosicion] = useState("DEL");
  console.log("state equipo" + equipo);
  console.log("state posicion" + posicion);

  async function getEquipos() {
    try {
      const response = await fetch("/api/getEquipos");
      const data = await response.json(); // Convertir la respuesta a JSON
      console.log(data[5]);
      setEquipo(data[5]); // Establecer el estado con los datos del jugador
    } catch (error) {
      console.error("Error fetching equipos:", error);
    }
  }
  async function getPosiciones() {
    try {
      const response = await fetch("/api/getPosiciones");
    } catch (error) {
      console.error("Error fetching posiciones:", error);
    }
  }
  async function getJugadores() {
    try {
      const response = await fetch(
        `/api/getJugadores?equipo=${equipo}&posicion=${posicion}`
      );
      const data = await response.json(); // Convertir la respuesta a JSON
      console.log(data);
      setPlayer(data); // Establecer el estado con los datos del jugador
    } catch (error) {
      console.error("Error fetching jugadores:", error);
    }
  }

  return (
    <section className={style.container}>
      <h1 className="title">SUBASTA</h1>
      {/* <button onClick={getPosiciones}>Obtener posiciones</button>
      <button onClick={getEquipos}>Obtener equipos</button>
      <button onClick={getJugadores}>Obtener jugadores</button>
      <div>{player ? <SinglePlayer jugador={player[0]} /> : ""}</div> */}
    </section>
  );
}

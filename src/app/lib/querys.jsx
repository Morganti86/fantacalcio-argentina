import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getEquipos() {
  noStore();
  try {
    const data = await sql`SELECT * FROM equipos order by equipo;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch equipos data.");
  }
}

export async function getFantaEquipos() {
  noStore();
  try {
    const data =
      await sql`SELECT * FROM fanta_equipos order by fanta_equipo;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch fanta_equipos data.");
  }
}

export async function getPosiciones() {
  noStore();
  try {
    const data = await sql`SELECT * FROM posiciones order by posicion;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posiciones data.");
  }
}

export async function getFantaJugadores({ fantaEquipo }) {
  noStore();
  try {
    const data = await sql`SELECT * FROM jugadores
    WHERE fanta_equipo = ${fantaEquipo}
    ORDER BY equipo, posicion, jugador;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch fantaJugadores data.");
  }
}

export async function getAllJugadores() {
  noStore();
  try {
    const data =
      await sql`SELECT * FROM jugadores ORDER BY equipo, posicion, jugador;`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch jugadores data.");
  }
}

import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

// Función para mezclar jugadores si corresponde
function shuffleJugadores(array) {
  return array.sort(() => Math.random() - 0.5);
}

// GET: obtener jugadores sin equipo asignado
export async function GET() {
  const noTeam = "";
  const shouldShuffle = process.env.SORTEO_ALEATORIO === "true";

  try {
    const client = await db.connect();
    const result = await client.query(
      "SELECT * FROM jugadores WHERE fanta_equipo = $1",
      [noTeam]
    );
    client.release();

    let players = result.rows;

    if (shouldShuffle) {
      players = shuffleJugadores(players);
    }

    return NextResponse.json(players, { status: 200 });
  } catch (error) {
    console.error("Error fetching jugadores sin equipo:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT: actualizar jugador (equipo y precio de compra)
export async function PUT(req) {
  try {
    const { id, compradorActual, precioActual } = await req.json();
    const client = await db.connect();

    await client.query(
      "UPDATE jugadores SET fanta_equipo = $2, precio_compra = $3 WHERE id = $1",
      [id, compradorActual, precioActual]
    );

    client.release();

    return NextResponse.json(
      { message: "Player updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating jugador:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

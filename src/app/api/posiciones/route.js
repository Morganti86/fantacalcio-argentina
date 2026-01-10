import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

// GET: obtener posiciones pendientes
export async function GET() {
  try {
    const client = await db.connect();
    const result = await client.query(
      "SELECT * FROM posiciones WHERE pendiente = $1",
      [true]
    );
    client.release();

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT: actualizar posición actual y anterior
export async function PUT(req) {
  const { posicionAnt, posicionAct } = await req.json();
  const False = false;
  const True = true;

  try {
    const client = await db.connect();

    // Start a transaction
    await client.query("BEGIN");

    if (posicionAnt === null && posicionAct === null) {
      // Set 'ARQ' to pendiente=true, activo=true
      await client.query(
        "UPDATE posiciones SET pendiente = $1, activo = $1 WHERE posicion = 'ARQ'",
        [True]
      );

      // Set all other positions to pendiente=true, activo=false
      await client.query(
        "UPDATE posiciones SET pendiente = $1, activo = $2 WHERE posicion != 'ARQ'",
        [True, False]
      );
    } else {
      // Update to set activo to True for the new position
      await client.query(
        "UPDATE posiciones SET activo = $2 WHERE posicion = $1",
        [posicionAct, True]
      );

      // Update to set pendiente and activo to False for the old position
      await client.query(
        "UPDATE posiciones SET pendiente = $2, activo = $2 WHERE posicion = $1",
        [posicionAnt, False]
      );
    }

    // Commit the transaction
    await client.query("COMMIT");

    client.release();
    return NextResponse.json(
      { message: "Posición actualizada exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    // Rollback en caso de error
    await client.query("ROLLBACK");
    console.error("Error updating posiciones:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

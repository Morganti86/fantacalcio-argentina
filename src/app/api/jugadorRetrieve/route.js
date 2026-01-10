import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const { id } = await req.json();

  try {
    const client = await db.connect();

    const result = await client.query(
      "SELECT fanta_equipo, precio_compra FROM jugadores WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0 || !result.rows[0].fanta_equipo) {
      client.release();
      //return NextResponse.json({ message: "No updates needed, fanta_equipo is empty" }, { status: 204 });
      return new NextResponse(null, { status: 204 });
    }

    const { fanta_equipo: fantaEquipoAnterior, precio_compra: precioCompraAnterior } = result.rows[0];

    await client.query(
      "UPDATE jugadores SET fanta_equipo = '', precio_compra = NULL WHERE id = $1",
      [id]
    );

    if (fantaEquipoAnterior) {
      await client.query(
        "UPDATE fanta_equipos SET remanente = remanente + $1 WHERE fanta_equipo = $2",
        [precioCompraAnterior, fantaEquipoAnterior]
      );
    }

    client.release();
    return NextResponse.json({
      message: "Player updated successfully",
      monto: precioCompraAnterior,
      equipo: fantaEquipoAnterior
    }, { status: 200 });

  } catch (error) {
    console.error("Error updating player or fanta_equipos:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

import { db } from "@vercel/postgres";

export async function GET() {
  try {
    const client = await db.connect();
    const result = await client.query("SELECT * FROM equipos ORDER BY equipo");
    client.release();

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching equipos:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req) {
  try {
    const { equipoAct, equipoAnt } = await req.json();
    const client = await db.connect();

    await client.query("BEGIN");

    if (equipoAct === null) {
      // Reiniciar valores
      await client.query(
        "UPDATE equipos SET pendiente = $1, activo = $2",
        [true, false]
      );
    } else if (equipoAnt === null) {
      // Primer equipo sorteado
      await client.query(
        "UPDATE equipos SET pendiente = $2, activo = $2 WHERE equipo = $1",
        [equipoAct, true]
      );
    } else {
      // Marcar anterior como inactivo
      await client.query(
        "UPDATE equipos SET pendiente = $2, activo = $2 WHERE equipo = $1",
        [equipoAnt, false]
      );
      // Marcar nuevo como activo
      await client.query(
        "UPDATE equipos SET pendiente = $2, activo = $2 WHERE equipo = $1",
        [equipoAct, true]
      );
    }

    await client.query("COMMIT");
    client.release();

    return new Response(JSON.stringify({ message: "Equipo updated successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error updating equipos:", error);

    try {
      await client.query("ROLLBACK");
    } catch {}

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

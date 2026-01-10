import { db } from "@vercel/postgres";

// GET y PUT para fantaEquipos
export async function GET() {
  const activo = 0;
  try {
    const client = await db.connect();
    const result = await client.query(
      "SELECT * FROM fanta_equipos WHERE estado = $1 ORDER BY fanta_equipo",
      [activo]
    );
    await client.release();

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching fanta_equipos:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function PUT(req) {
  try {
    const { fantaEquipo, remanenteActualizado } = await req.json();
    const client = await db.connect();

    await client.query(
      "UPDATE fanta_equipos SET remanente = $2 WHERE fanta_equipo = $1",
      [fantaEquipo, remanenteActualizado]
    );

    await client.release();

    return new Response(
      JSON.stringify({ message: "Fanta_equipo updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating fanta_equipos:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

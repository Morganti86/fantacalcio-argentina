import { db } from "@vercel/postgres";

export async function PUT(req) {
  try {
    const client = await db.connect();
    const { newOrdenedTeams } = await req.json();

    // Actualizar el campo 'orden' en la base de datos usando los datos proporcionados
    await Promise.all(
      newOrdenedTeams.map(async ({ id, orden }) => {
        await client.query(
          "UPDATE fanta_equipos SET orden = $1 WHERE id = $2",
          [orden, id]
        );
      })
    );

    await client.release();
    return new Response(
      JSON.stringify({ message: "Fanta_equipo orden updated successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating fanta_equipo orden:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const client = await db.connect();
      const { newOrdenedTeams } = req.body;

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
      res
        .status(200)
        .json({ message: "Fanta_equipo orden updated successfully" });
    } catch (error) {
      console.error("Error updating fanta_equipo orden:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { equipo } = req.body;
  const pendiente = false;
  const activo = false;

  if (req.method === "PUT") {
    try {
      const client = await db.connect();
      const result = await client.query(
        "UPDATE equipos SET pendiente = $2, activo = $3 WHERE equipo = $1",
        [equipo, pendiente, activo]
      );
      await client.release();
      res.status(200).json({ message: "equipo updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Manejar cualquier otro método que no sea GET o PUT
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

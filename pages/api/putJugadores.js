import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const { id, compradorActual, precioActual } = req.body;
  if (req.method === "PUT") {
    try {
      const client = await db.connect();
      const result = await client.query(
        "UPDATE jugadores SET fanta_equipo = $2, precio_compra = $3 WHERE id = $1",
        [id, compradorActual, precioActual ]
      );
      await client.release();
      res.status(200).json({ message: "Player updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Manejar cualquier otro método que no sea GET o PUT
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

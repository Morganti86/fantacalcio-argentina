import { db } from "@vercel/postgres";

export default async function handler(req, res) {
  const activo = 0;

  if (req.method === "GET") {
    try {
      const client = await db.connect();
      const result = await client.query(
        "SELECT * FROM fanta_equipos WHERE estado = $1 ORDER BY fanta_equipo",
        [activo]);
      await client.release();
      const equipos = result.rows;
      res.status(200).json(equipos);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
